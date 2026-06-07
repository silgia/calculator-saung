import { describe, expect, it } from 'vitest'
import { handleNumberInput } from './numberInput'

describe('handleNumberInput', () => {
  it('adds a single digit', () => {
    expect(handleNumberInput('', '5', false).value).toBe('5')
  })

  it('appends digits to existing input', () => {
    expect(handleNumberInput('12', '3', false).value).toBe('123')
  })

  it('handles decimal numbers correctly', () => {
    expect(handleNumberInput('3', '.', false).value).toBe('3.')
    expect(handleNumberInput('3.1', '4', false).value).toBe('3.14')
  })

  it('prevents multiple decimal points', () => {
    expect(handleNumberInput('3.14', '.', false).value).toBe('3.14')
  })

  it('prevents leading zeroes for new numbers', () => {
    expect(handleNumberInput('0', '5', false).value).toBe('5')
    expect(handleNumberInput('', '0', false).value).toBe('0')
  })
})
