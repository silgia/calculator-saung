export interface CalculatorState {
  display: string
  currentInput: string
  expression: string
  newInput: boolean
  error: string | null
}

export type CalculatorAction =
  | { type: 'NUMBER'; payload: string }
  | { type: 'DOT' }
  | { type: 'OPERATION'; payload: string }
  | { type: 'FUNCTION'; payload: string }
  | { type: 'LPAREN' }
  | { type: 'RPAREN' }
  | { type: 'EQUALS' }
  | { type: 'CLEAR' }
  | { type: 'BACKSPACE' }
