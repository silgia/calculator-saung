export function power(base: number, exponent: number): number {
  if (base === 0 && exponent === 0) return 1
  const result = Math.pow(base, exponent)
  return Number(Number(result).toFixed(12))
}

export function squareRoot(x: number): number {
  if (x < 0) throw new Error('Invalid domain for square root')
  return Number(Math.sqrt(x).toFixed(12))
}

export function nthRoot(x: number, n: number): number {
  if (n === 0) throw new Error('Invalid domain for nth root')
  if (x < 0 && n % 2 === 0) throw new Error('Invalid domain for nth root')
  const value = Math.sign(x) * Math.pow(Math.abs(x), 1 / n)
  return Number(Number(value).toFixed(12))
}

export function log10(x: number): number {
  if (x <= 0) throw new Error('Invalid domain for log10')
  return Number(Math.log10(x).toFixed(12))
}

export function ln(x: number): number {
  if (x <= 0) throw new Error('Invalid domain for ln')
  return Number(Math.log(x).toFixed(12))
}
