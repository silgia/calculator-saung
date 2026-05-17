# Sprint 2: UI Design & Basic Layout

## Duration
1-2 minggu (5-10 hari kerja)

## Goal
Membuat UI layout kalkulator yang responsive, responsive untuk mobile/tablet/desktop

## Acceptance Criteria
- [ ] Calculator UI terlihat sesuai design specs dengan custom colors
- [ ] Layout responsive untuk mobile, tablet, dan desktop
- [ ] Semua button dan display elements terlihat dengan baik
- [ ] Accessibility requirements met (contrast ratio, font sizes)
- [ ] Design dokumentasi lengkap

---

## Detailed Tasks

### Task 2.1: Desain UI Specification (1 hari)
**Assigned to**: UI/UX Designer & Frontend Developer  
**Priority**: Critical  
**Status**: Not Started

#### Subtasks:
- [ ] Create wireframe untuk desktop layout:
  - [ ] Display area (top)
  - [ ] Button grid (4x5 atau 4x6 untuk scientific)
  - [ ] Specific dimension specifications
- [ ] Create wireframe untuk mobile layout:
  - [ ] Landscape vs portrait considerations
  - [ ] Button size untuk touch targets
  - [ ] Text size readability
- [ ] Create tablet layout wireframe:
  - [ ] Intermediate between mobile & desktop
- [ ] Document color usage untuk setiap element
- [ ] Document typography specifications:
  - [ ] Display font size
  - [ ] Button font size
  - [ ] Minimum touch target: 44x44px

**Definition of Done**:
- Wireframes complete untuk 3 breakpoints
- Color palette mapped ke elements
- Typography specs documented
- Stakeholder approval

---

### Task 2.2: Implementasi Calculator Main Component (2 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Not Started

#### Subtasks:
- [ ] Create `src/components/Calculator/Calculator.tsx`:
  ```typescript
  interface CalculatorProps {}
  export const Calculator: React.FC<CalculatorProps> = () => {
    // Main component
  }
  ```
- [ ] Setup grid layout:
  - [ ] Desktop: 4 columns × 6 rows grid
  - [ ] Mobile: 4 columns × 5 rows (scientific hidden atau tabbed)
  - [ ] Use CSS Grid dengan Tailwind
- [ ] Define responsive breakpoints:
  - [ ] Mobile: < 640px (sm)
  - [ ] Tablet: 640px - 1024px (md)
  - [ ] Desktop: > 1024px (lg)
- [ ] Create responsive classes structure
- [ ] Setup component state placeholder:
  - [ ] Display value
  - [ ] Current input
  - [ ] Operation type
  - [ ] Result value
- [ ] Add basic styling dengan custom colors

**Definition of Done**:
- Component renders dengan grid layout
- Responsive untuk 3 breakpoints
- All state management initialized
- No styling issues atau layout breaks

---

### Task 2.3: Display Area Component (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Not Started

#### Subtasks:
- [ ] Create `src/components/Display/Display.tsx`:
  ```typescript
  interface DisplayProps {
    value: string;
  }
  export const Display: React.FC<DisplayProps> = ({ value }) => {}
  ```
- [ ] Styling dengan specs:
  - [ ] Background color: powder-petal atau alabaster-grey
  - [ ] Text color: dusty-mauve
  - [ ] Font size: responsive (text-xl md:text-2xl lg:text-3xl)
  - [ ] Padding: appropriate spacing
  - [ ] Border radius: subtle
- [ ] Handle long numbers:
  - [ ] Text overflow strategy (auto-scale font size optional)
  - [ ] Max length consideration
  - [ ] Decimal points handling
- [ ] Add placeholder text styling
- [ ] Add shadow/border untuk depth
- [ ] Test visibility dengan berbagai value lengths

**Definition of Done**:
- Display component renders correctly
- Long numbers handled properly
- Styling sesuai spec
- Responsive text sizing works

---

### Task 2.4: Button Components (2 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Not Started

#### Subtasks:
- [ ] Create `src/components/Button/Button.tsx`:
  ```typescript
  interface ButtonProps {
    label: string;
    type: 'number' | 'operator' | 'function' | 'action';
    onClick: () => void;
  }
  export const Button: React.FC<ButtonProps> = ({ label, type, onClick }) => {}
  ```
- [ ] Implement button types styling:
  - [ ] Number buttons: pastel-pink background
  - [ ] Operator buttons: cherry-blossom background
  - [ ] Function buttons: alabaster-grey background
  - [ ] Action buttons (C, =): dusty-mauve background
  - [ ] Text color: contrast-appropriate (dusty-mauve atau white)
- [ ] Button styling:
  - [ ] Minimum 44x44px touch target
  - [ ] Padding & sizing responsive
  - [ ] Hover state: slight color change atau shadow
  - [ ] Active state: visual feedback
  - [ ] Focus state: keyboard accessible
- [ ] Create button variants:
  - [ ] Regular button
  - [ ] Wide button (untuk = atau C)
- [ ] Test button interactions
- [ ] Verify accessibility (ARIA labels, keyboard focus)

**Definition of Done**:
- All button types styled correctly
- Hover/active/focus states working
- Touch targets meet 44x44px minimum
- Keyboard navigation accessible
- Mobile-friendly tap targets

---

### Task 2.5: Button Grid Layout & Organization (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: High  
**Status**: Not Started

#### Subtasks:
- [ ] Create button layout configuration:
  - [ ] Numbers: 0-9 (10 buttons)
  - [ ] Basic operators: + - * / (4 buttons)
  - [ ] Action buttons: C, Delete/Backspace, = (3 buttons)
  - [ ] Decimal point: . (1 button)
  - [ ] Scientific: will be added in Sprint 5
- [ ] Create button grid structure:
  - [ ] Desktop grid: 4 columns
  - [ ] Mobile landscape: 4 columns
  - [ ] Mobile portrait: 4 columns dengan scrolling/tabs untuk scientific
- [ ] Position specific buttons:
  - [ ] = button: wider (span 2 columns atau full width)
  - [ ] 0 button: potentially wider
  - [ ] C button: full width top
- [ ] Implement button organization logic
- [ ] Add responsive column adjustments

**Definition of Done**:
- Button grid displays correctly
- Button sizes appropriate untuk layout
- Layout adapts correctly to screen sizes
- No overlapping atau misaligned buttons

---

### Task 2.6: Responsive Design Implementation (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: High  
**Status**: Not Started

#### Subtasks:
- [ ] Setup Tailwind breakpoints usage:
  - [ ] Base mobile styles
  - [ ] `sm:` tablet styles
  - [ ] `md:` desktop styles
- [ ] Implement responsive calculations:
  - [ ] Button size scaling
  - [ ] Font size scaling
  - [ ] Padding/spacing scaling
  - [ ] Gap between buttons adjustment
- [ ] Test responsiveness:
  - [ ] Mobile: iPhone 12/13/14 sizes
  - [ ] Tablet: iPad sizes
  - [ ] Desktop: 1920x1080 dan above
  - [ ] Orientation changes
- [ ] Use browser dev tools untuk testing
- [ ] Document responsive breakpoints logic

**Definition of Done**:
- Layout responsive untuk semua target devices
- No overflow atau layout breaks
- Touch targets remain accessible
- Performance good di semua sizes

---

### Task 2.7: Styling & Polish (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: Medium  
**Status**: Not Started

#### Subtasks:
- [ ] Apply custom colors consistently:
  - [ ] Verify all custom colors used
  - [ ] Verify color contrast (WCAG AA minimum)
  - [ ] Test dengan accessibility checker
- [ ] Add subtle design elements:
  - [ ] Box shadows untuk depth
  - [ ] Border radius untuk softness
  - [ ] Hover effects/transitions
  - [ ] Loading/transition states
- [ ] Typography polish:
  - [ ] Font family consistent
  - [ ] Line heights appropriate
  - [ ] Letter spacing if needed
- [ ] Verify consistency:
  - [ ] All buttons consistent styling
  - [ ] All text consistent styling
  - [ ] All spacing consistent
- [ ] Browser compatibility testing

**Definition of Done**:
- Styling polished dan professional
- All custom colors applied
- Transitions smooth
- Cross-browser compatible

---

## Testing Checklist
- [ ] Layout responsive pada mobile (375px)
- [ ] Layout responsive pada tablet (768px)
- [ ] Layout responsive pada desktop (1920px)
- [ ] All buttons clickable dan visible
- [ ] Display area shows text properly
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Touch targets minimum 44x44px
- [ ] No layout shifts on different screen sizes
- [ ] Performance: Page renders in <1s

## Visual Design Reference
### Color Palette:
```
--alabaster-grey: #d8e2dcff;      (Light background)
--powder-petal: #ffe5d9ff;        (Number buttons)
--pastel-pink: #ffcad4ff;         (Secondary)
--cherry-blossom: #f4acb7ff;      (Operator buttons)
--dusty-mauve: #9d8189ff;         (Text/Action buttons)
```

### Typography:
- Display: 2xl-3xl (responsive)
- Buttons: lg-xl (responsive)
- Min font size: 16px (for accessibility)

### Spacing:
- Gap between buttons: 0.5rem - 1rem (responsive)
- Padding inside buttons: 0.75rem - 1.5rem (responsive)

## Notes
- Sprint 2 fokus pada UI/UX, belum ada functionality
- Semua styling menggunakan Tailwind CSS
- Custom colors harus di-verify di Tailwind config
- Design review sebelum lanjut ke Sprint 3
