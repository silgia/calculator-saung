function roundValue(value: number): number {
  const fixed = Number(value.toFixed(12))
  return Number.isFinite(fixed) ? fixed : value
}

export function performCalculation(
  prev: number,
  current: number,
  operation: string
): number {
  switch (operation) {
    case '+':
      return roundValue(prev + current)
    case '-':
      return roundValue(prev - current)
    case '*':
      return roundValue(prev * current)
    case '/':
      if (current === 0) {
        throw new Error('Cannot divide by zero')
      }
      return roundValue(prev / current)
    default:
      return current
  }
}
