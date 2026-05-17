# Sprint 3: Basic Calculator Logic & Operations

## Duration
1-2 minggu (5-10 hari kerja)

## Goal
Implementasi logika calculator untuk operasi dasar (+ - * /) dengan proper state management dan calculation engine

## Acceptance Criteria
- [ ] Semua basic operations working correctly (+, -, *, /)
- [ ] Number input handling proper (no leading zeros, decimal handling)
- [ ] Clear/Reset functionality working
- [ ] Equals calculation accurate untuk basic operations
- [ ] Backspace/Delete working properly
- [ ] Unit tests untuk calculation functions
- [ ] No calculation errors atau edge case bugs

---

## Detailed Tasks

### Task 3.1: State Management Setup (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Not Started

#### Subtasks:
- [ ] Create `src/types/calculator.ts`:
  ```typescript
  export interface CalculatorState {
    display: string;
    currentInput: string;
    previousValue: number | null;
    operation: string | null;
    newInput: boolean;
  }
  
  export type CalculatorAction = 
    | { type: 'NUMBER'; payload: string }
    | { type: 'OPERATION'; payload: string }
    | { type: 'EQUALS' }
    | { type: 'CLEAR' }
    | { type: 'BACKSPACE' };
  ```
- [ ] Create `src/hooks/useCalculator.ts` custom hook:
  - [ ] Initialize state dengan initial values
  - [ ] Export state dan dispatch functions
  - [ ] Export helper functions: handleNumber, handleOperation, etc
- [ ] Setup initial calculator state:
  - [ ] display: "0"
  - [ ] currentInput: ""
  - [ ] previousValue: null
  - [ ] operation: null
  - [ ] newInput: false
- [ ] Define action types dan handlers

**Definition of Done**:
- Types properly defined
- Custom hook exported dan usable
- State structure clear dan logical
- Initial state correctly initialized

---

### Task 3.2: Number Input Handler (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Not Started

#### Subtasks:
- [ ] Create `src/utils/numberInput.ts`:
  ```typescript
  export function handleNumberInput(
    current: string,
    input: string,
    isNewInput: boolean
  ): { value: string; isNew: boolean }
  ```
- [ ] Implement number input logic:
  - [ ] Allow digits 0-9
  - [ ] Handle decimal point (only once per number)
  - [ ] Prevent leading zeros (0.5 ok, 05 not ok)
  - [ ] Max number length consideration (prevent too large)
- [ ] Implement in custom hook:
  - [ ] handleNumber(digit: string) function
  - [ ] Update display on every digit
  - [ ] Track if it's new input
- [ ] Test cases:
  - [ ] Single digit: 5
  - [ ] Multiple digits: 123
  - [ ] Decimal: 3.14
  - [ ] Leading zero: 0.5
  - [ ] Invalid: 00, 05.2.3

**Definition of Done**:
- Number input logic robust
- All test cases passing
- No edge case bugs
- Display updates correctly

---

### Task 3.3: Basic Operations Implementation (2 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Not Started

#### Subtasks:
- [ ] Create `src/utils/calculator.ts` calculation engine:
  ```typescript
  export function performCalculation(
    prev: number,
    current: number,
    operation: string
  ): number
  ```
- [ ] Implement operations:
  - [ ] Addition (+): prev + current
  - [ ] Subtraction (-): prev - current
  - [ ] Multiplication (*): prev * current
  - [ ] Division (/): prev / current dengan check divide by zero
- [ ] Implement decimal precision:
  - [ ] Use fixed decimal places untuk avoid floating point errors
  - [ ] Example: (0.1 + 0.2) should equal 0.3
- [ ] Create operator button handlers:
  - [ ] handleOperator(op: string) in custom hook
  - [ ] Store previous value
  - [ ] Store operation type
  - [ ] Reset input flag untuk next number
  - [ ] Calculate jika operation sebelumnya ada (chain operations)
- [ ] Test all operation combinations:
  - [ ] 5 + 3 = 8
  - [ ] 10 - 4 = 6
  - [ ] 6 * 7 = 42
  - [ ] 15 / 3 = 5
  - [ ] 0.1 + 0.2 = 0.3

**Definition of Done**:
- All operations working accurately
- Floating point precision handled
- Chaining operations working
- No calculation errors

---

### Task 3.4: Equals & Clear Functionality (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Not Started

#### Subtasks:
- [ ] Implement equals handler:
  - [ ] handleEquals() function
  - [ ] Calculate final result
  - [ ] Display result
  - [ ] Reset state untuk next calculation
  - [ ] Allow continuing calculation dari result
- [ ] Implement clear handler:
  - [ ] handleClear() function
  - [ ] Reset all state to initial values
  - [ ] Set display to "0"
  - [ ] Clear all stored values
- [ ] Handle edge cases:
  - [ ] Equals without any operation
  - [ ] Equals dengan incomplete operation
  - [ ] Multiple equals presses
  - [ ] Clear anytime
  - [ ] Clear after result
- [ ] Test sequences:
  - [ ] 5 + 3 =
  - [ ] Clear, then 10 / 2 =
  - [ ] 4 * 5, = (again for same operation)

**Definition of Done**:
- Equals working properly
- Clear working properly
- Edge cases handled
- Chaining after result working

---

### Task 3.5: Backspace/Delete Functionality (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: High  
**Status**: Not Started

#### Subtasks:
- [ ] Implement delete handler:
  - [ ] handleBackspace() function
  - [ ] Remove last digit dari current input
  - [ ] Update display
  - [ ] If empty after delete, show "0"
  - [ ] Don't affect previousValue atau operation
- [ ] Integrate backspace button:
  - [ ] Add button di UI
  - [ ] Connect to handler
  - [ ] Test dengan various inputs
- [ ] Handle edge cases:
  - [ ] Backspace on "0"
  - [ ] Backspace on decimal number
  - [ ] Backspace after equals
  - [ ] Multiple backspaces
- [ ] Test cases:
  - [ ] "123" → backspace → "12"
  - [ ] "5.0" → backspace → "5."
  - [ ] "0" → backspace → "0"

**Definition of Done**:
- Backspace working correctly
- All edge cases handled
- Display updates properly
- Decimal handling correct

---

### Task 3.6: Connect UI & Logic (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Not Started

#### Subtasks:
- [ ] Update Calculator.tsx component:
  - [ ] Use useCalculator hook
  - [ ] Pass handlers ke button components
  - [ ] Pass display value ke Display component
- [ ] Update Button components:
  - [ ] Connect onClick handlers
  - [ ] Pass appropriate handlers based on button type
- [ ] Test all interactions:
  - [ ] Click numbers
  - [ ] Click operators
  - [ ] Click equals
  - [ ] Click clear
  - [ ] Click backspace
- [ ] Verify state flow:
  - [ ] Display updates correctly
  - [ ] State changes properly
  - [ ] No unexpected behaviors

**Definition of Done**:
- All buttons connected
- Interactions working
- State updates visible di UI
- No errors di console

---

### Task 3.7: Testing & Quality Assurance (1 hari)
**Assigned to**: Frontend Developer / QA  
**Priority**: High  
**Status**: Not Started

#### Subtasks:
- [ ] Setup testing framework:
  - [ ] Install Jest atau Vitest
  - [ ] Configure test environment
  - [ ] Setup test utilities
- [ ] Write unit tests untuk calculation functions:
  - [ ] Test all 4 operations
  - [ ] Test decimal precision
  - [ ] Test divide by zero
  - [ ] Test edge cases
- [ ] Write unit tests untuk number input:
  - [ ] Test digit input
  - [ ] Test decimal point
  - [ ] Test leading zeros
- [ ] Manual testing all scenarios:
  - [ ] Simple operations
  - [ ] Chained operations
  - [ ] Edge cases
  - [ ] Error scenarios
- [ ] Run test coverage report
  - [ ] Aim for >80% coverage
- [ ] Document known limitations

**Definition of Done**:
- >80% test coverage
- All unit tests passing
- Manual testing completed
- No unresolved bugs

---

## Testing Checklist
- [ ] 2 + 3 = 5
- [ ] 10 - 4 = 6
- [ ] 6 * 7 = 42
- [ ] 15 / 3 = 5
- [ ] 0.1 + 0.2 = 0.3 (floating point)
- [ ] 10 / 0 = Error or Infinity handled
- [ ] Chaining: 5 + 3 - 2 = 6
- [ ] Backspace removes digits
- [ ] Clear resets everything
- [ ] Multiple equals presses work
- [ ] Input decimal properly
- [ ] No leading zeros

## Code Structure
```
src/
├── utils/
│   ├── calculator.ts          // Calculation engine
│   ├── numberInput.ts         // Number input logic
│   └── validation.ts          // Input validation
├── hooks/
│   └── useCalculator.ts       // Calculator state & logic
├── types/
│   └── calculator.ts          // TypeScript types
└── components/
    └── Calculator/
        ├── Calculator.tsx     // Main component
        ├── Display.tsx        // Connected to state
        └── Button.tsx         // Connected to handlers
```

## Mathematical Precision Notes
- Use `parseFloat()` dan `toFixed()` untuk decimal handling
- Avoid floating point arithmetic directly
- Consider using `Decimal.js` library jika precision critical

## Notes
- Sprint 3 fokus pada basic functionality tanpa parentheses/scientific
- Testing comprehensive untuk catch regressions
- Code reviews important sebelum merge
- Documentation untuk custom hook dan utilities penting
