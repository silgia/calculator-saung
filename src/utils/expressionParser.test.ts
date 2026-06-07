import { describe, expect, it } from 'vitest'
import { parseAndEvaluate, validateParentheses, validateExpression, addParentheses } from './expressionParser'

describe('expressionParser', () => {
  it('evaluates expressions with parentheses correctly', () => {
    expect(parseAndEvaluate('(2+3)*4')).toBe(20)
    expect(parseAndEvaluate('2+3*4')).toBe(14)
    expect(parseAndEvaluate('100/(2+3)')).toBe(20)
    expect(parseAndEvaluate('(2+3)*(4+5)')).toBe(45)
  })

  it('validates balanced parentheses', () => {
    expect(validateParentheses('(2+3)')).toEqual({ isValid: true, error: undefined })
    expect(validateParentheses('((2+3)*4)')).toEqual({ isValid: true, error: undefined })
    expect(validateParentheses('(2+3')).toEqual({ isValid: false, error: 'Unbalanced parentheses' })
    expect(validateParentheses('2+3)')).toEqual({ isValid: false, error: 'Unbalanced parentheses' })
  })

  it('validates expressions correctly', () => {
    expect(validateExpression('2+3')).toBe(true)
    expect(validateExpression('(2+3)*4')).toBe(true)
    expect(validateExpression('2+3)')).toBe(false)
    expect(validateExpression('((2+3)*4')).toBe(false)
    expect(validateExpression('2++3')).toBe(false)
    expect(validateExpression('sqrt(4)')).toBe(true)
    expect(validateExpression('log(100)')).toBe(true)
    expect(validateExpression('ln(1)')).toBe(true)
  })

  it('adds parentheses appropriately', () => {
    expect(addParentheses('2+3', true)).toBe('2+3(')
    expect(addParentheses('2+3(', false)).toBe('2+3()')
    expect(addParentheses('2+3', false)).toBe('2+3')
  })

  it('evaluates scientific expressions correctly', () => {
    expect(parseAndEvaluate('2^3')).toBe(8)
    expect(parseAndEvaluate('4^0.5')).toBe(2)
    expect(parseAndEvaluate('(2+3)^2')).toBe(25)
    expect(parseAndEvaluate('sqrt(9)')).toBe(3)
    expect(parseAndEvaluate('log(100)')).toBe(2)
    expect(parseAndEvaluate('ln(1)')).toBe(0)
  })
})
