import { log10, ln, power, squareRoot } from './scientificFunctions'

function isOperator(token: string) {
  return ['+', '-', '*', '/', '^'].includes(token)
}

function isFunction(token: string) {
  return ['sqrt', 'log', 'ln'].includes(token)
}

function precedence(op: string) {
  if (op === '+' || op === '-') return 1
  if (op === '*' || op === '/') return 2
  if (op === '^') return 3
  return 0
}

export function validateParentheses(expression: string) {
  const stack: string[] = []
  for (const ch of expression) {
    if (ch === '(') stack.push(ch)
    if (ch === ')') {
      if (stack.length === 0) return { isValid: false, error: 'Unbalanced parentheses' }
      stack.pop()
    }
  }
  return { isValid: stack.length === 0, error: stack.length === 0 ? undefined : 'Unbalanced parentheses' }
}

export function validateExpression(expression: string) {
  const normalized = expression.replace(/\s+/g, '')
  if (!normalized) return false
  if (!validateParentheses(normalized).isValid) return false
  if (/^[+*/^]/.test(normalized)) return false
  if (/[+\-*/^.(]$/.test(normalized)) return false
  if (/\.\./.test(normalized)) return false
  if (/[+\-*/^]{2,}/.test(normalized)) return false
  if (/\([+\-*/^]/.test(normalized)) return false
  if (/[+\-*/^]\)/.test(normalized)) return false
  return true
}

export function addParentheses(expression: string, open: boolean) {
  const normalized = expression.replace(/\s+/g, '')
  if (open) {
    return `${normalized}(`
  }

  const openCount = (normalized.match(/\(/g) || []).length
  const closeCount = (normalized.match(/\)/g) || []).length
  if (openCount > closeCount) {
    return `${normalized})`
  }
  return normalized
}

export function parseAndEvaluate(input: string): number {
  const expr = input.replace(/\s+/g, '')
  const { isValid } = validateParentheses(expr)
  if (!isValid) throw new Error('Unbalanced parentheses')

  // Tokenize numbers, operators, parentheses, and functions
  const tokens: string[] = []
  let numBuffer = ''
  let nameBuffer = ''
  let prevToken = ''

  const flushBuffers = () => {
    if (numBuffer) {
      tokens.push(numBuffer)
      prevToken = numBuffer
      numBuffer = ''
    }
    if (nameBuffer) {
      const functionName = nameBuffer === '√' ? 'sqrt' : nameBuffer
      tokens.push(functionName)
      prevToken = functionName
      nameBuffer = ''
    }
  }

  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i]

    if ((ch >= '0' && ch <= '9') || ch === '.') {
      numBuffer += ch
      continue
    }

    if (ch === '-' && (i === 0 || prevToken === '' || isOperator(prevToken) || prevToken === '(')) {
      if (numBuffer) flushBuffers()
      numBuffer = '-'
      continue
    }

    if (/^[a-zA-Z]$/.test(ch) || ch === '√') {
      if (numBuffer) flushBuffers()
      nameBuffer += ch
      continue
    }

    flushBuffers()
    if (isOperator(ch) || ch === '(' || ch === ')') {
      tokens.push(ch)
      prevToken = ch
    }
  }

  flushBuffers()

  // Shunting-yard to RPN
  const outputQueue: string[] = []
  const opStack: string[] = []

  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      outputQueue.push(token)
    } else if (isFunction(token)) {
      opStack.push(token)
    } else if (isOperator(token)) {
      while (
        opStack.length > 0 &&
        (isOperator(opStack[opStack.length - 1]) || isFunction(opStack[opStack.length - 1])) &&
        ((isOperator(opStack[opStack.length - 1]) &&
          ((precedence(opStack[opStack.length - 1]) > precedence(token)) ||
            (precedence(opStack[opStack.length - 1]) === precedence(token) && token !== '^'))) ||
          isFunction(opStack[opStack.length - 1])) &&
        opStack[opStack.length - 1] !== '('
      ) {
        outputQueue.push(opStack.pop()!)
      }
      opStack.push(token)
    } else if (token === '(') {
      opStack.push(token)
    } else if (token === ')') {
      while (opStack.length > 0 && opStack[opStack.length - 1] !== '(') {
        outputQueue.push(opStack.pop()!)
      }
      opStack.pop()
      if (opStack.length > 0 && isFunction(opStack[opStack.length - 1])) {
        outputQueue.push(opStack.pop()!)
      }
    }
  }

  while (opStack.length > 0) outputQueue.push(opStack.pop()!)

  // Evaluate RPN
  const evalStack: number[] = []
  for (const t of outputQueue) {
    if (!isNaN(Number(t))) {
      evalStack.push(Number(t))
      continue
    }
    if (isFunction(t)) {
      const value = evalStack.pop()!
      switch (t) {
        case 'sqrt':
          evalStack.push(squareRoot(value))
          break
        case 'log':
          evalStack.push(log10(value))
          break
        case 'ln':
          evalStack.push(ln(value))
          break
      }
      continue
    }

    const b = evalStack.pop()!
    const a = evalStack.pop()!
    switch (t) {
      case '+':
        evalStack.push(a + b)
        break
      case '-':
        evalStack.push(a - b)
        break
      case '*':
        evalStack.push(a * b)
        break
      case '/':
        if (b === 0) throw new Error('Division by zero')
        evalStack.push(a / b)
        break
      case '^':
        evalStack.push(power(a, b))
        break
      default:
        throw new Error('Unknown operator ' + t)
    }
  }

  const result = evalStack.pop() ?? 0
  // round small floating errors
  return Number(Number(result).toFixed(12))
}

export default parseAndEvaluate
