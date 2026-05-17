# Index - Sprint Breakdown Kalkulator Scientific React

## Overview

Project breakdown lengkap untuk Kalkulator Scientific dengan React & Tailwind CSS v4, dibagi menjadi 7 sprint dengan durasi total ~8-10 minggu.

---

## File Structure

```
requirements/
├── 00-init.md                  # Original requirements
├── 01-sprint-breakdown.md      # This file - overview semua sprints
├── sprint-01.md               # Setup & Foundation
├── sprint-02.md               # UI Design & Layout
├── sprint-03.md               # Basic Calculator Logic
├── sprint-04.md               # Parentheses & Expressions
├── sprint-05.md               # Scientific Functions
├── sprint-06.md               # Advanced Features & Mobile
└── sprint-07.md               # Testing & Deployment
```

---

## Sprint Summary

### 📋 Sprint 1: Project Setup & Foundation (1 minggu)
**Status**: Not Started  
**Key Tasks**: Vite+React setup, Tailwind CSS v4 configuration, folder structure, git setup

**Files to Create**:
- Folder structure (src/components, src/hooks, src/utils, src/types, src/constants)
- Configuration files (tailwind.config.js, tsconfig.json)

**Deliverables**: Development environment ready, project skeleton

**Details**: [sprint-01.md](sprint-01.md)

---

### 🎨 Sprint 2: UI Design & Layout (1-2 minggu)
**Status**: Not Started  
**Key Tasks**: Design UI specifications, implement responsive layout, create Button components, Display component

**Components to Build**:
- Calculator.tsx (main container with grid layout)
- Display.tsx (result display area)
- Button.tsx (reusable button component)

**Deliverables**: Complete UI with responsive design, no functionality yet

**Details**: [sprint-02.md](sprint-02.md)

---

### 🧮 Sprint 3: Basic Calculator Logic (1-2 minggu)
**Status**: Not Started  
**Key Tasks**: State management, number input, basic operations (+, -, *, /), equals, clear, backspace

**Utils to Create**:
- src/utils/calculator.ts (calculation engine)
- src/utils/numberInput.ts (number handling)
- src/hooks/useCalculator.ts (state management)

**Deliverables**: Fully functional basic calculator, unit tests

**Details**: [sprint-03.md](sprint-03.md)

---

### 📐 Sprint 4: Parentheses & Expressions (1 minggu)
**Status**: Not Started  
**Key Tasks**: Parentheses buttons, expression parser, order of operations (PEMDAS), validation

**Utils to Create**:
- src/utils/expressionParser.ts (parse & evaluate expressions)

**Deliverables**: Complex expressions with parentheses working, proper order of operations

**Details**: [sprint-04.md](sprint-04.md)

---

### 🔬 Sprint 5: Scientific Functions (1-2 minggu)
**Status**: Not Started  
**Key Tasks**: Eksponen (^), Akar (√), Logaritma (log, ln), mobile UI strategy for scientific

**Utils to Create**:
- src/utils/scientificFunctions.ts (power, root, logarithm)

**Deliverables**: All scientific functions working, integrated sa calculator

**Details**: [sprint-05.md](sprint-05.md)

---

### 📱 Sprint 6: Advanced Features & Mobile (1-2 minggu)
**Status**: Not Started  
**Key Tasks**: Keyboard input support, mobile optimization, accessibility (WCAG AA), optional: history, dark mode

**Features**:
- Keyboard shortcuts (0-9, operators, Enter, Backspace, etc.)
- Touch optimization (44x44px buttons, responsive)
- Accessibility improvements
- Optional: History tracking, Dark mode toggle
- Performance optimization

**Deliverables**: Production-ready UI/UX, keyboard support, mobile-friendly

**Details**: [sprint-06.md](sprint-06.md)

---

### ✅ Sprint 7: Testing, QA & Deployment (1-2 minggu)
**Status**: Not Started  
**Key Tasks**: Unit testing (>85% coverage), integration testing, cross-browser testing, mobile testing, CI/CD setup, deployment

**Setup**:
- Testing framework (Jest/Vitest)
- GitHub Actions CI/CD
- Production deployment

**Deliverables**: Production-ready application, comprehensive testing, deployment pipeline

**Details**: [sprint-07.md](sprint-07.md)

---

## Technology Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite 5+
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Testing**: Jest/Vitest
- **Package Manager**: npm/yarn

---

## Custom Colors (Tailwind v4)

```css
--alabaster-grey: #d8e2dcff;      /* Light backgrounds */
--powder-petal: #ffe5d9ff;        /* Number buttons */
--pastel-pink: #ffcad4ff;         /* Secondary accents */
--cherry-blossom: #f4acb7ff;      /* Operator buttons */
--dusty-mauve: #9d8189ff;         /* Text & action buttons */
```

---

## Key Deliverables by Sprint

| Sprint | Main Deliverable | Status |
|--------|------------------|--------|
| 1 | Development Environment | 🔴 Not Started |
| 2 | Calculator UI/Layout | 🔴 Not Started |
| 3 | Basic Calculator (+, -, *, /) | 🔴 Not Started |
| 4 | Parentheses & Order of Operations | 🔴 Not Started |
| 5 | Scientific Functions (^, √, log) | 🔴 Not Started |
| 6 | Mobile Optimization & Extras | 🔴 Not Started |
| 7 | Production Ready + Deployment | 🔴 Not Started |

---

## Development Workflow

### Per Sprint:
1. Review sprint requirements in detail sprint file
2. Create necessary components/utils
3. Implement features dengan TDD approach
4. Run tests & fix issues
5. Code review & merge sa main
6. Document completed tasks

### Daily:
- Start with sprint file
- Update task status regularly
- Run tests frequently
- Commit regularly sa git

---

## Testing Strategy

### Unit Testing (Sprint-specific)
- Each sprint includes unit tests
- Target: >80-90% coverage
- Test edge cases thoroughly

### Integration Testing (Sprint-specific)
- Test feature workflows
- Test state management
- Test component interactions

### Full Testing (Sprint 7)
- Cross-browser testing
- Mobile device testing
- Performance benchmarking
- Accessibility testing (WCAG AA)

---

## Deployment Plan

### Development
- Local development sa `npm run dev`
- Commits sa feature branches
- PR reviews before merge

### Staging
- Merge sa main triggers staging deploy
- Manual smoke testing
- Performance verification

### Production
- Manual trigger sa production
- Post-deploy monitoring
- Rollback plan ready

---

## Performance Targets

- Lighthouse Score: >90
- Bundle Size: <250KB (gzipped)
- First Contentful Paint (FCP): <1.5s
- Time to Interactive (TTI): <2.5s
- Calculation Time: <100ms

---

## Accessibility Standards

- WCAG 2.1 Level AA compliance
- Keyboard navigation fully supported
- Screen reader compatible
- Color contrast: 4.5:1 minimum
- Touch targets: 44x44px minimum

---

## Getting Started

1. **For Sprint 1**: Follow setup instructions sa [sprint-01.md](sprint-01.md)
2. **For each Sprint**: Read detailed sprint file
3. **Reference**: This index file para overview

---

## Quick Links

- [Sprint 1 - Setup](sprint-01.md)
- [Sprint 2 - UI](sprint-02.md)
- [Sprint 3 - Logic](sprint-03.md)
- [Sprint 4 - Expressions](sprint-04.md)
- [Sprint 5 - Scientific](sprint-05.md)
- [Sprint 6 - Mobile](sprint-06.md)
- [Sprint 7 - Testing](sprint-07.md)

---

## Notes

- Each sprint file contains detailed tasks, acceptance criteria, testing checklists
- Sprints dapat di-adjust berdasarkan team velocity
- Optional features (history, dark mode) dapat dipindah sa post-launch
- Regular testing throughout project, bukan hanya Sprint 7
- Documentation important - update README & code comments regularly

---

**Created**: May 17, 2026  
**Last Updated**: May 17, 2026  
**Status**: Planning Phase
