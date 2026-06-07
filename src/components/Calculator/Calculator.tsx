import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Display } from '../Display/Display'
import { Button } from '../Button/Button'
import { useCalculator } from '../../hooks/useCalculator'

interface CalculatorProps {}
export const Calculator: FC<CalculatorProps> = () => {
  const [showScientific, setShowScientific] = useState(true)
  const {
    display,
    handleNumber,
    handleOperator,
    handleDot,
    handleFunction,
    handleOpenParenthesis,
    handleCloseParenthesis,
    handleEquals,
    handleClear,
    handleBackspace,
  } = useCalculator()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key
      const lowerKey = key.toLowerCase()

      if (key >= '0' && key <= '9') {
        handleNumber(key)
        event.preventDefault()
        return
      }

      if (key === '.') {
        handleDot()
        event.preventDefault()
        return
      }

      if (['+', '-', '*', '/', '^'].includes(key)) {
        handleOperator(key)
        event.preventDefault()
        return
      }

      if (key === '(') {
        handleOpenParenthesis()
        event.preventDefault()
        return
      }
      if (key === ')') {
        handleCloseParenthesis()
        event.preventDefault()
        return
      }

      if (lowerKey === 'enter' || key === '=') {
        handleEquals()
        event.preventDefault()
        return
      }

      if (lowerKey === 'escape' || lowerKey === 'c') {
        handleClear()
        event.preventDefault()
        return
      }

      if (key === 'Backspace') {
        handleBackspace()
        event.preventDefault()
        return
      }

      if (lowerKey === 's') {
        handleFunction('sqrt')
        event.preventDefault()
        return
      }

      if (lowerKey === 'l') {
        handleFunction('log')
        event.preventDefault()
        return
      }

      if (lowerKey === 'n') {
        handleFunction('ln')
        event.preventDefault()
        return
      }

      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
        event.preventDefault()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleNumber, handleOperator, handleDot, handleFunction, handleOpenParenthesis, handleCloseParenthesis, handleEquals, handleClear, handleBackspace])

  return (
    <div className="max-w-md sm:max-w-xl mx-auto p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div>
            <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl">Calculator</h1>
            <p className="text-sm text-slate-500">Keyboard support and mobile-friendly layout</p>
          </div>
          <button
            type="button"
            className="sm:hidden rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            onClick={() => setShowScientific((value) => !value)}
          >
            {showScientific ? 'Hide scientific' : 'Show scientific'}
          </button>
        </div>

        <Display value={display} />

        <div className={`${showScientific ? 'grid' : 'hidden sm:grid'} grid-cols-4 gap-3 mt-4`}>
          <Button label="C" type="action" onClick={handleClear} />
          <Button label="^" type="operator" onClick={() => handleOperator('^')} />
          <Button label="√" type="function" onClick={() => handleFunction('sqrt')} />
          <Button label="Del" type="function" onClick={handleBackspace} />

          <Button label="log" type="function" onClick={() => handleFunction('log')} />
          <Button label="ln" type="function" onClick={() => handleFunction('ln')} />
          <Button label="(" type="operator" onClick={handleOpenParenthesis} />
          <Button label=")" type="operator" onClick={handleCloseParenthesis} />
        </div>

        <div className="grid grid-cols-4 gap-3 mt-4">
          <Button label="7" onClick={() => handleNumber('7')} />
          <Button label="8" onClick={() => handleNumber('8')} />
          <Button label="9" onClick={() => handleNumber('9')} />
          <Button label="/" type="operator" onClick={() => handleOperator('/')} />

          <Button label="4" onClick={() => handleNumber('4')} />
          <Button label="5" onClick={() => handleNumber('5')} />
          <Button label="6" onClick={() => handleNumber('6')} />
          <Button label="*" type="operator" onClick={() => handleOperator('*')} />

          <Button label="1" onClick={() => handleNumber('1')} />
          <Button label="2" onClick={() => handleNumber('2')} />
          <Button label="3" onClick={() => handleNumber('3')} />
          <Button label="-" type="operator" onClick={() => handleOperator('-')} />

          <div className="col-span-2">
            <Button label="0" className="w-full" onClick={() => handleNumber('0')} />
          </div>
          <Button label="." onClick={handleDot} />
          <Button label="+" type="operator" onClick={() => handleOperator('+')} />

          <div className="col-span-4">
            <Button label="=" type="action" className="w-full" onClick={handleEquals} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
