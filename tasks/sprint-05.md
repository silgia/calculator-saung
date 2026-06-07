# Sprint 5: Scientific Functions (Eksponen, Akar, Logaritma)

## Duration
1-2 minggu (5-10 hari kerja)

## Goal
Implementasi fungsi-fungsi scientific untuk eksponen, akar, dan logaritma dengan support untuk berbagai tipe operasi

## Acceptance Criteria
- [ ] Eksponen (^) working untuk semua cases (x^2, x^3, x^n)
- [ ] Akar (√) working (square root, cube root, nth root)
- [ ] Logaritma (log, ln) working dengan proper domain validation
- [ ] Negative exponents working
- [ ] Decimal exponents/roots working
- [ ] Scientific buttons accessible di UI
- [ ] Mobile UI handles scientific buttons properly
- [ ] All test cases passing

---

## Detailed Tasks

### Task 5.1: Scientific Functions UI Layout (1 hari)
**Assigned to**: UI/UX Designer & Frontend Developer  
**Priority**: High  
**Status**: Completed

#### Subtasks:
- [ ] Design scientific functions button layout:
  - [ ] Add buttons: ^, √, log, ln
  - [ ] Consider additional: x^2, x^3, ∛x (nth root)
- [ ] Layout strategy untuk mobile:
  - [ ] Option 1: Collapsible drawer/menu
  - [ ] Option 2: Tab switching (Basic/Scientific)
  - [ ] Option 3: Horizontal scroll
  - [ ] Choose based on UX testing
- [ ] Implement UI for chosen strategy:
  - [ ] Update Calculator component layout
  - [ ] Add toggle/switch mechanism
  - [ ] Maintain responsive design
- [ ] Button styling:
  - [ ] Use distinct color (maybe alabaster-grey)
  - [ ] Distinguish dari basic operation buttons
  - [ ] Clear labeling
- [ ] Test responsiveness:
  - [ ] Mobile portrait
  - [ ] Mobile landscape
  - [ ] Tablet
  - [ ] Desktop

**Definition of Done**:
- Scientific buttons visible dan accessible
- Mobile experience smooth
- Layout not cluttered
- Responsive design maintained

---

### Task 5.2: Eksponen (Power) Functionality (2 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Completed

#### Subtasks:
- [ ] Create `src/utils/scientificFunctions.ts`:
  ```typescript
  export function power(base: number, exponent: number): number {
    // x^n function
  }
  ```
- [ ] Implement eksponen calculations:
  - [ ] x^2: square
  - [ ] x^3: cube
  - [ ] x^n: any power
  - [ ] x^(-n): negative exponent (1/x^n)
  - [ ] x^(1/n): fractional exponent (nth root via power)
  - [ ] x^0 = 1 (any number)
  - [ ] 0^0: handle edge case (typically 1 atau undefined)
- [ ] UI integration:
  - [ ] Add ^ operator handling
  - [ ] Display sebagai "x^2" atau similar
  - [ ] Support dalam expression
- [ ] Update calculator parser:
  - [ ] Recognize ^ operator
  - [ ] Include dalam order of operations (high precedence, right-associative)
  - [ ] (2^3)^2 = 64 (left to right) vs 2^(3^2) = 512 (right to left - standard)
- [ ] Test cases:
  - [ ] 2^3 = 8
  - [ ] 2^(-2) = 0.25
  - [ ] 4^0.5 = 2
  - [ ] 10^3 = 1000
  - [ ] (-2)^3 = -8
  - [ ] (-2)^2 = 4
  - [ ] 0^5 = 0
  - [ ] 2^0 = 1

**Definition of Done**:
- All power operations working
- Negative exponents correct
- Fractional exponents correct
- Edge cases handled
- Order of operations (right-associative) correct
- All test cases passing

---

### Task 5.3: Akar (Square Root & Nth Root) Functionality (2 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Completed

#### Subtasks:
- [ ] Implement root functions:
  ```typescript
  export function squareRoot(x: number): number { return x^0.5 }
  export function nthRoot(x: number, n: number): number { return x^(1/n) }
  export function cubeRoot(x: number): number { return x^(1/3) }
  ```
- [ ] UI buttons:
  - [ ] √x: square root button
  - [ ] ∛x: cube root button (optional)
  - [ ] ⁿ√x: nth root dengan input (kompleks, optional)
- [ ] Domain validation:
  - [ ] √x untuk x ≥ 0 (no negative square roots)
  - [ ] ⁿ√x untuk x ≥ 0 ketika n even
  - [ ] ⁿ√x untuk x any ketika n odd (real roots for negative)
  - [ ] Show error untuk invalid domain
- [ ] Function behavior:
  - [ ] √9 = 3
  - [ ] √2 ≈ 1.414
  - [ ] ∛8 = 2
  - [ ] ∛(-8) = -2 (odd root)
- [ ] Integration dalam expression:
  - [ ] √(4+5) = 3
  - [ ] Support dalam calculation
- [ ] Test cases:
  - [ ] √0 = 0
  - [ ] √1 = 1
  - [ ] √4 = 2
  - [ ] √2 ≈ 1.414
  - [ ] √(-4) = Error
  - [ ] ∛8 = 2
  - [ ] ∛(-8) = -2

**Definition of Done**:
- Square root working correctly
- Nth root option implemented (if included)
- Domain validation proper
- Error messages clear
- Nested in expressions working

---

### Task 5.4: Logaritma Functionality (2 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Completed

#### Subtasks:
- [ ] Implement logaritm functions:
  ```typescript
  export function log10(x: number): number { return Math.log10(x) }
  export function ln(x: number): number { return Math.log(x) } // natural log
  export function logBase(x: number, base: number): number { 
    return Math.log(x) / Math.log(base) 
  }
  ```
- [ ] UI buttons:
  - [ ] "log": logarithm base 10
  - [ ] "ln": natural logarithm (base e)
  - [ ] Optional: logₙ custom base
- [ ] Domain & Range:
  - [ ] Only untuk x > 0
  - [ ] log(0) = -∞ (show as Error or special handling)
  - [ ] log(negative) = undefined (show Error)
  - [ ] Range: (-∞, +∞)
- [ ] Accuracy:
  - [ ] log₁₀(100) = 2
  - [ ] ln(e) = 1
  - [ ] ln(1) = 0
  - [ ] log₁₀(1000) = 3
- [ ] Integration:
  - [ ] Support dalam expressions
  - [ ] log(10^3) = 3
- [ ] Test cases:
  - [ ] log₁₀(10) = 1
  - [ ] log₁₀(100) = 2
  - [ ] log₁₀(1) = 0
  - [ ] log₁₀(0.1) = -1
  - [ ] ln(e) = 1
  - [ ] ln(1) = 0
  - [ ] log₁₀(-5) = Error
  - [ ] log₁₀(0) = Error

**Definition of Done**:
- Logarithm functions working
- Domain validation proper
- Error messages clear
- Mathematical accuracy good
- Integration dengan expressions

---

### Task 5.5: Scientific Functions Integration (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: High  
**Status**: Completed

#### Subtasks:
- [ ] Update calculator parser untuk recognize fungsi:
  - [ ] √x
  - [ ] log(x)
  - [ ] ln(x)
  - [ ] x^n
- [ ] Update order of operations:
  - [ ] Functions: highest precedence
  - [ ] Exponents: high precedence (right-associative)
  - [ ] Multiply/Divide: medium
  - [ ] Add/Subtract: lowest
- [ ] Handle function composition:
  - [ ] √(2^3) = √8 ≈ 2.83
  - [ ] log(10^2) = 2
  - [ ] 2^(√4) = 2^2 = 4
- [ ] Button handlers:
  - [ ] Connect scientific buttons ke calculator
  - [ ] Update display appropriately
  - [ ] Manage input state
- [ ] Test complex expressions:
  - [ ] √(log(100)) = √2 ≈ 1.414
  - [ ] 2^(ln(e)+1) = 2^2 = 4

**Definition of Done**:
- Scientific functions integrated
- Complex expressions working
- Order of operations correct
- No parsing errors

---

### Task 5.6: Error Handling untuk Scientific Functions (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: Medium  
**Status**: Completed

#### Subtasks:
- [ ] Create error handling:
  - [ ] Domain errors (sqrt negative, log non-positive)
  - [ ] Mathematical errors (overflow, underflow)
  - [ ] Invalid function usage
- [ ] Error messages:
  - [ ] "Invalid domain for √"
  - [ ] "Invalid domain for log"
  - [ ] "Cannot divide by zero"
  - [ ] Clear dan actionable
- [ ] User recovery:
  - [ ] Clear button
  - [ ] Backspace untuk correct input
  - [ ] Try different input
- [ ] Test error scenarios:
  - [ ] √(-4)
  - [ ] log(-5)
  - [ ] ln(0)
  - [ ] √(5 / (3-3))

**Definition of Done**:
- Error handling robust
- Error messages helpful
- User can recover
- Edge cases handled

---

### Task 5.7: Comprehensive Testing (1 hari)
**Assigned to**: Frontend Developer / QA  
**Priority**: High  
**Status**: Completed

#### Subtasks:
- [ ] Unit tests untuk scientific functions:
  - [ ] All power operations
  - [ ] All root operations
  - [ ] All logarithm operations
  - [ ] Edge cases untuk each
- [ ] Integration tests:
  - [ ] Scientific functions di expressions
  - [ ] Multiple functions combined
  - [ ] With parentheses
  - [ ] With basic operators
- [ ] Accuracy tests:
  - [ ] Compare dengan reference calculator
  - [ ] Check floating point precision
  - [ ] Verify within acceptable tolerance
- [ ] Manual testing:
  - [ ] UI buttons working
  - [ ] Mobile experience
  - [ ] Error scenarios
- [ ] Performance:
  - [ ] Calculate time reasonable
  - [ ] No lag di mobile
- [ ] Browser compatibility:
  - [ ] Test Chrome, Firefox, Safari
  - [ ] Mobile browsers

**Definition of Done**:
- >85% test coverage
- All tests passing
- Accuracy verified
- Performance acceptable
- Cross-browser compatible

---

## Testing Checklist
- [ ] 2^3 = 8
- [ ] 2^(-2) = 0.25
- [ ] 4^0.5 = 2
- [ ] √9 = 3
- [ ] √2 ≈ 1.414
- [ ] ∛8 = 2
- [ ] log₁₀(100) = 2
- [ ] ln(e) = 1
- [ ] √(-4) = Error
- [ ] log(-5) = Error
- [ ] Complex: √(2^3) ≈ 2.83
- [ ] Complex: log(10^2) = 2

## Mathematical Reference
### Exponents
- Positive: x^n, n > 0
- Negative: x^(-n) = 1/(x^n)
- Zero: x^0 = 1 (except 0^0)
- Fractional: x^(1/n) = nth root

### Roots
- √x = x^0.5
- ∛x = x^(1/3)
- ⁿ√x = x^(1/n)

### Logarithms
- log₁₀(x): logarithm base 10
- ln(x): natural logarithm (base e)
- log₂(x): binary logarithm
- logₙ(x) = ln(x) / ln(n)

## Notes
- Sprint 5 bisa split ke 2 sprints jika perlu lebih detail
- Scientific functions kompleks - testing comprehensive penting
- Accuracy testing critical untuk scientific calculator
- Consider decimal.js untuk high precision math
- UI/UX untuk scientific functions crucial untuk usability
