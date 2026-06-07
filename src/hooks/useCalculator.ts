import { useCallback, useReducer } from 'react'
import type { CalculatorAction, CalculatorState } from '../types/calculator'
import { handleNumberInput } from '../utils/numberInput'
import { parseAndEvaluate, validateParentheses } from '../utils/expressionParser'

const initialState: CalculatorState = {
  display: '0',
  currentInput: '',
  expression: '',
  newInput: false,
  error: null,
}

function normalizeExpression(expression: string): string {
  return expression.replace(/\s+/g, '')
}

function reducer(state: CalculatorState, action: CalculatorAction): CalculatorState {
  switch (action.type) {
    case 'NUMBER': {
      if (state.error) {
        return {
          ...initialState,
          currentInput: action.payload,
          display: action.payload,
          newInput: false,
        }
      }

      const { value } = handleNumberInput(state.newInput ? '' : state.currentInput, action.payload, state.newInput)
      return {
        ...state,
        currentInput: value,
        display: value,
        newInput: false,
      }
    }

    case 'DOT': {
      if (state.error) {
        return {
          ...initialState,
          currentInput: '0.',
          display: '0.',
          newInput: false,
        }
      }

      const { value } = handleNumberInput(state.newInput ? '' : state.currentInput, '.', state.newInput)
      return {
        ...state,
        currentInput: value,
        display: value,
        newInput: false,
      }
    }

    case 'OPERATION': {
      const expression = state.currentInput ? `${state.expression}${state.currentInput}${action.payload}` : `${state.expression}${action.payload}`
      return {
        ...state,
        expression,
        currentInput: '',
        display: action.payload,
        newInput: true,
        error: null,
      }
    }

    case 'FUNCTION': {
      const functionName = action.payload
      let expression = ''
      if (state.currentInput) {
        expression = `${state.expression}${functionName}(${state.currentInput})`
      } else {
        expression = `${state.expression}${functionName}(`
      }
      return {
        ...state,
        expression,
        currentInput: '',
        display: functionName,
        newInput: true,
        error: null,
      }
    }

    case 'LPAREN': {
      if (state.error) {
        return {
          ...initialState,
          expression: '(',
          display: '(',
          newInput: true,
        }
      }

      const canOpen = state.expression === '' || /[+\-*/(]$/.test(state.expression)
      const openExpr = canOpen
        ? `${state.expression}(`
        : `${state.expression}*(`

      return {
        ...state,
        expression: openExpr,
        currentInput: '',
        display: '(',
        newInput: true,
        error: null,
      }
    }

    case 'RPAREN': {
      const expr = normalizeExpression(state.expression + state.currentInput)
      const { isValid } = validateParentheses(expr)
      if (!isValid) {
        return {
          ...state,
          error: 'Unbalanced parentheses',
          display: 'Error',
          currentInput: '',
          newInput: true,
        }
      }

      if (!/[0-9)]$/.test(expr)) {
        return {
          ...state,
          error: 'Invalid parentheses',
          display: 'Error',
          newInput: true,
        }
      }

      return {
        ...state,
        expression: `${expr})`,
        currentInput: '',
        display: ')',
        newInput: true,
        error: null,
      }
    }

    case 'EQUALS': {
      const expr = normalizeExpression(state.expression + state.currentInput)
      if (!expr) {
        return state
      }

      const { isValid } = validateParentheses(expr)
      if (!isValid) {
        return {
          ...state,
          error: 'Unbalanced parentheses',
          display: 'Error',
          currentInput: '',
          newInput: true,
        }
      }

      try {
        const result = parseAndEvaluate(expr)
        return {
          display: String(result),
          currentInput: String(result),
          expression: '',
          newInput: true,
          error: null,
        }
      } catch (error) {
        return {
          ...state,
          display: 'Error',
          currentInput: '',
          expression: '',
          newInput: true,
          error: 'Invalid expression',
        }
      }
    }

    case 'CLEAR':
      return initialState

    case 'BACKSPACE': {
      if (state.currentInput) {
        const nextInput = state.currentInput.slice(0, -1)
        return {
          ...state,
          currentInput: nextInput,
          display: nextInput || '0',
          newInput: false,
        }
      }

      if (state.expression) {
        const nextExpression = state.expression.slice(0, -1)
        return {
          ...state,
          expression: nextExpression,
          display: nextExpression || '0',
          newInput: false,
        }
      }

      return state
    }

    default:
      return state
  }
}

export function useCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleNumber = useCallback((num: string) => dispatch({ type: 'NUMBER', payload: num }), [])
  const handleDot = useCallback(() => dispatch({ type: 'DOT' }), [])
  const handleOperator = useCallback((op: string) => dispatch({ type: 'OPERATION', payload: op }), [])
  const handleFunction = useCallback((fn: string) => dispatch({ type: 'FUNCTION', payload: fn }), [])
  const handleOpenParenthesis = useCallback(() => dispatch({ type: 'LPAREN' }), [])
  const handleCloseParenthesis = useCallback(() => dispatch({ type: 'RPAREN' }), [])
  const handleEquals = useCallback(() => dispatch({ type: 'EQUALS' }), [])
  const handleClear = useCallback(() => dispatch({ type: 'CLEAR' }), [])
  const handleBackspace = useCallback(() => dispatch({ type: 'BACKSPACE' }), [])

  return {
    display: state.display,
    currentInput: state.currentInput,
    expression: state.expression,
    error: state.error,
    handleNumber,
    handleDot,
    handleOperator,
    handleFunction,
    handleOpenParenthesis,
    handleCloseParenthesis,
    handleEquals,
    handleClear,
    handleBackspace,
  }
}
