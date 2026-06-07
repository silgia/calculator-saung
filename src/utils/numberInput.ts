export function handleNumberInput(
  current: string,
  input: string,
  isNewInput: boolean
): { value: string; isNew: boolean } {
  const baseValue = isNewInput ? '' : current

  if (input === '.') {
    if (baseValue.includes('.')) {
      return { value: baseValue || '0', isNew: false }
    }
    return { value: baseValue ? `${baseValue}.` : '0.', isNew: false }
  }

  if (!/^[0-9]$/.test(input)) {
    return { value: baseValue, isNew: false }
  }

  if (baseValue === '0') {
    return { value: input, isNew: false }
  }

  return { value: `${baseValue}${input}`, isNew: false }
}
