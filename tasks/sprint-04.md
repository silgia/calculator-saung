# Sprint 4: Parentheses & Expression Validation

## Duration
1 minggu (5 hari kerja)

## Goal
Implementasi penggunaan kurung/parentheses dan improve expression parser untuk handle complex expressions dengan proper order of operations (PEMDAS/BODMAS)

## Acceptance Criteria
- [ ] Parentheses buttons working correctly
- [ ] Balanced parentheses validation working
- [ ] Order of operations (PEMDAS) correct
- [ ] Complex expressions evaluated properly
- [ ] Error handling untuk invalid expressions
- [ ] All test cases passing

---

## Detailed Tasks

### Task 4.1: Parentheses Button & UI Integration (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Completed

#### Subtasks:
- [ ] Add parentheses buttons di UI:
  - [ ] "(" button - opening parenthesis
  - [ ] ")" button - closing parenthesis
  - [ ] Styling sesuai dengan design (maybe same color as operators)
- [ ] Reorganize button layout:
  - [ ] Add parentheses buttons di accessible location
  - [ ] Maintain responsive design
  - [ ] Ensure tidak disrupting existing buttons
- [ ] Styling:
  - [ ] Use appropriate color untuk parentheses buttons
  - [ ] Distinguish dari regular operators
  - [ ] Hover/active states
- [ ] Accessibility:
  - [ ] ARIA labels
  - [ ] Keyboard shortcuts

**Definition of Done**:
- Parentheses buttons visible dan clickable
- Layout maintained
- Styling consistent

---

### Task 4.2: Expression Parser Enhancement (2 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Completed

#### Subtasks:
- [ ] Create/Update `src/utils/expressionParser.ts`:
  ```typescript
  export function parseAndEvaluate(expression: string): number
  export function validateExpression(expression: string): boolean
  export function addParentheses(expr: string, open: boolean): string
  ```
- [ ] Implement expression tokenization:
  - [ ] Split expression into tokens (numbers, operators, parentheses)
  - [ ] Handle multi-digit numbers
  - [ ] Handle decimal numbers
- [ ] Implement proper order of operations:
  - [ ] Parentheses first
  - [ ] Exponents (akan di-add di Sprint 5)
  - [ ] Multiplication & Division (left to right)
  - [ ] Addition & Subtraction (left to right)
- [ ] Handle nested parentheses:
  - [ ] Support: ((2+3)*4)
  - [ ] Support arbitrary nesting depth
- [ ] Error detection:
  - [ ] Missing operands
  - [ ] Missing operators
  - [ ] Unbalanced parentheses
  - [ ] Invalid expressions

**Definition of Done**:
- Parser correctly evaluates simple expressions
- Order of operations correct
- Nested parentheses work
- Error detection working

---

### Task 4.3: Balanced Parentheses Validation (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: High  
**Status**: Completed

#### Subtasks:
- [ ] Create validation function:
  ```typescript
  export function validateParentheses(expression: string): {
    isValid: boolean;
    error?: string;
  }
  ```
- [ ] Check balanced parentheses:
  - [ ] Count opening/closing parentheses
  - [ ] Ensure opening before closing
  - [ ] Detect: ((2+3, (2+3)), 2+3)
- [ ] Integration dalam update input:
  - [ ] Show error message untuk unbalanced
  - [ ] Prevent invalid expressions
  - [ ] Guide user untuk fix issues
- [ ] Handle dynamic balance:
  - [ ] Allow incomplete expression (during input)
  - [ ] Validate only pada equals/calculate
- [ ] Test cases:
  - [ ] (2+3) ✓
  - [ ] ((2+3)*4) ✓
  - [ ] (2+3 ✗
  - [ ] 2+3) ✗
  - [ ] ((2+3) ✗

**Definition of Done**:
- Validation accurate
- Error messages helpful
- No false positives/negatives

---

### Task 4.4: Parentheses Logic in Calculator Hook (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Completed

#### Subtasks:
- [ ] Update `src/hooks/useCalculator.ts`:
  - [ ] Add parentheses tracking state
  - [ ] Implement handleOpenParenthesis()
  - [ ] Implement handleCloseParenthesis()
- [ ] Logic untuk opening parenthesis:
  - [ ] Add to current expression
  - [ ] Don't reset input
  - [ ] Update display
- [ ] Logic untuk closing parenthesis:
  - [ ] Check if valid to close
  - [ ] Add to expression
  - [ ] Auto-calculate if needed
- [ ] Handle chaining:
  - [ ] 2 * (3 + 4) = 14
  - [ ] (2 + 3) * (4 + 5) = 45
- [ ] Integrate with existing calculation logic
- [ ] Test all scenarios

**Definition of Done**:
- Parentheses working dalam hook
- Chaining working correctly
- State management clean

---

### Task 4.5: Order of Operations Testing (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: High  
**Status**: Completed

#### Subtasks:
- [ ] Create comprehensive test suite:
  - [ ] Test PEMDAS correctness
  - [ ] Test dengan parentheses
  - [ ] Test complex expressions
- [ ] Test cases:
  - [ ] 2 + 3 * 4 = 14 (not 20)
  - [ ] (2 + 3) * 4 = 20
  - [ ] 10 - 2 - 3 = 5 (left to right)
  - [ ] 16 / 4 / 2 = 2 (left to right)
  - [ ] 2 + 3 * 4 - 5 = 9
  - [ ] (2 + 3) * (4 - 1) = 15
  - [ ] 100 / (2 + 3) = 20
- [ ] Floating point precision:
  - [ ] (0.1 + 0.2) * 10 = 3 (not 3.0000000001)
- [ ] Run unit tests
- [ ] Document edge cases

**Definition of Done**:
- All test cases passing
- PEMDAS correctly implemented
- Floating point handled properly

---

### Task 4.6: Error Handling & User Feedback (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: Medium  
**Status**: Completed

#### Subtasks:
- [ ] Create error handling system:
  - [ ] Invalid expression detection
  - [ ] User-friendly error messages
  - [ ] Display error in UI
- [ ] Error types:
  - [ ] SyntaxError: "Invalid expression"
  - [ ] BalanceError: "Unbalanced parentheses"
  - [ ] DomainError: "Division by zero"
- [ ] UI feedback:
  - [ ] Show error message temporary
  - [ ] Auto-clear after timeout atau input
  - [ ] Or show persistent error state
- [ ] Recovery:
  - [ ] Clear button clears errors
  - [ ] Allow correction
  - [ ] Backspace removes/fixes errors
- [ ] Test error scenarios:
  - [ ] Input incomplete expression
  - [ ] Input invalid operators
  - [ ] Input unbalanced parentheses

**Definition of Done**:
- Error handling robust
- User feedback clear
- Recovery paths work

---

## Testing Checklist
- [ ] (2+3)*4 = 20
- [ ] 2+3*4 = 14
- [ ] ((2+3)*4) = 20
- [ ] (2+3) = 5
- [ ] 2*(3+4*5) = 46
- [ ] 100/(2+3) = 20
- [ ] (0.1+0.2)*10 ≈ 3
- [ ] Unbalanced ( detected
- [ ] Unbalanced ) detected
- [ ] Error messages show properly
- [ ] Clear works after error
- [ ] Chaining parentheses: (2+3)*(4+5) = 45

## Expression Parser Algorithm
Consider implementasi menggunakan salah satu:
1. **Recursive Descent Parser** - simpler, easier to understand
2. **Shunting Yard Algorithm** - handles complex expressions well
3. **Expression Tree** - structured, handles precedence clearly

Recommended: Recursive Descent Parser untuk clarity dan maintainability.

## Example Parser Structure
```typescript
function evaluateExpression(expr: string): number {
  const tokens = tokenize(expr);
  return parseExpression(tokens, 0)[0];
}

function parseExpression(tokens, index) {
  // Handle addition/subtraction (lowest precedence)
}

function parseTerm(tokens, index) {
  // Handle multiplication/division
}

function parseFactor(tokens, index) {
  // Handle parentheses and numbers (highest precedence)
}
```

## Notes
- Sprint 4 heavy pada algorithm development
- Parser correctness critical - thorough testing needed
- Consider using established math.js library jika time constraint
- Documentation penting untuk parser logic
- Code review sebelum merging ke main
