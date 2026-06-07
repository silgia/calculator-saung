import { describe, expect, it } from 'vitest'
import { performCalculation } from './calculator'

describe('performCalculation', () => {
  it('adds two numbers', () => {
    expect(performCalculation(5, 3, '+')).toBe(8)
  })

  it('subtracts two numbers', () => {
    expect(performCalculation(10, 4, '-')).toBe(6)
  })

  it('multiplies two numbers', () => {
    expect(performCalculation(6, 7, '*')).toBe(42)
  })

  it('divides two numbers', () => {
    expect(performCalculation(15, 3, '/')).toBe(5)
  })

  it('throws on divide by zero', () => {
    expect(() => performCalculation(5, 0, '/')).toThrow('Cannot divide by zero')
  })

  it('handles decimals precisely', () => {
    expect(performCalculation(0.1, 0.2, '+')).toBeCloseTo(0.3, 9)
  })
})
