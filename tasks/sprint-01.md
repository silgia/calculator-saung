# Sprint 1: Project Setup & Konfigurasi Foundation

## Duration
1 minggu (5 hari kerja)

## Goal
Setup project infrastructure, konfigurasi Tailwind CSS dengan custom colors, dan organize project structure

## Acceptance Criteria
- [ ] Vite + React development server berjalan lancar
- [ ] Tailwind CSS v4 terinstall dan configured dengan custom colors
- [ ] Folder structure terorganisir dengan baik
- [ ] Project siap untuk development di Sprint 2
- [ ] Git repository tersetup

---

## Detailed Tasks

### Task 1.1: Setup Vite + React Environment (2 hari)
**Assigned to**: Developer  
**Priority**: Critical  
**Status**: Not Started

#### Subtasks:
- [ ] Verify project structure dari Vite template
- [ ] Install all required dependencies:
  - [ ] react
  - [ ] react-dom
  - [ ] typescript (jika belum)
- [ ] Verify npm/yarn scripts berjalan:
  - [ ] `npm run dev`
  - [ ] `npm run build`
  - [ ] `npm run preview`
- [ ] Test dev server di http://localhost:5173
- [ ] Verify Hot Module Replacement (HMR) working
- [ ] Create initial .env file template

**Definition of Done**:
- Dev server runs without errors
- HMR working correctly
- All npm scripts functional
- Verified di berbagai browsers

---

### Task 1.2: Konfigurasi Tailwind CSS v4 dengan Custom Colors (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: Critical  
**Status**: Not Started

#### Subtasks:
- [ ] Install Tailwind CSS v4:
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- [ ] Definisikan custom colors di `tailwind.config.js`:
  ```javascript
  {
    alabasterGrey: '#d8e2dcff',
    powderPetal: '#ffe5d9ff',
    pastelPink: '#ffcad4ff',
    cherryBlossom: '#f4acb7ff',
    dustyMauve: '#9d8189ff'
  }
  ```
- [ ] Setup CSS variables alternative (jika diperlukan)
- [ ] Create color palette documentation
- [ ] Test semua custom colors bisa diakses di components
- [ ] Update tsconfig.json jika diperlukan

**Definition of Done**:
- Custom colors tersedia di Tailwind
- Colors bisa di-inspect di dev tools
- Documentation ada untuk reference

---

### Task 1.3: Folder Structure & Project Organization (1 hari)
**Assigned to**: Developer  
**Priority**: High  
**Status**: Not Started

#### Subtasks:
- [ ] Create folder structure:
  ```
  src/
  ├── components/
  │   ├── Calculator/
  │   ├── Display/
  │   ├── Button/
  │   └── shared/
  ├── hooks/
  ├── utils/
  ├── types/
  ├── constants/
  ├── styles/
  └── assets/
  ```
- [ ] Create `src/constants/colors.ts` untuk color definitions
- [ ] Create `src/constants/config.ts` untuk global configuration
- [ ] Setup `src/types/index.ts` untuk TypeScript types
- [ ] Create `src/utils/calculator.ts` template file
- [ ] Create README for folder structure

**Definition of Done**:
- Folder structure sesuai plan
- All template files created
- Documentation ada

---

### Task 1.4: Base Styling & Global Setup (1 hari)
**Assigned to**: Frontend Developer  
**Priority**: High  
**Status**: Not Started

#### Subtasks:
- [ ] Update `src/index.css` dengan:
  - [ ] Import Tailwind directives
  - [ ] CSS reset/normalize
  - [ ] Global font setup
  - [ ] Custom CSS variables (jika needed)
- [ ] Update `src/main.tsx` entry point:
  - [ ] Verify React import
  - [ ] Verify App import
  - [ ] Verify styling imports
- [ ] Create `src/App.tsx` skeleton
- [ ] Test styling di browser
- [ ] Verify responsive breakpoints working

**Definition of Done**:
- Global styles applied
- Responsive breakpoints working
- No CSS conflicts or issues

---

### Task 1.5: Git & Version Control Setup (1 hari)
**Assigned to**: Developer  
**Priority**: Medium  
**Status**: Not Started

#### Subtasks:
- [ ] Setup .gitignore:
  - [ ] node_modules/
  - [ ] dist/
  - [ ] .env.local
  - [ ] IDE-specific files
- [ ] Initial git commit: "chore: initial project setup"
- [ ] Create main branch protection rules (jika menggunakan GitHub)
- [ ] Setup branch naming convention documentation
- [ ] Create CONTRIBUTING.md untuk development guidelines

**Definition of Done**:
- Git repository initialized
- .gitignore configured
- Initial commit done
- Git workflow documented

---

## Testing Checklist
- [ ] Dev server runs: `npm run dev`
- [ ] Build succeeds: `npm run build`
- [ ] Custom colors accessible di browser
- [ ] No console errors or warnings
- [ ] Responsive design breakpoints work
- [ ] Git repository functional

## Notes
- Pastikan Node.js version compatible dengan Vite & React 18+
- Tailwind v4 memiliki beberapa breaking changes, pastikan dokumentasi dicheck
- Custom colors akan di-extend, jadi buat structure yang flexible

## Dependencies to Install
```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x"
  },
  "devDependencies": {
    "@types/react": "^18.x",
    "@types/react-dom": "^18.x",
    "@vitejs/plugin-react": "^4.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x",
    "tailwindcss": "^4.x",
    "typescript": "^5.x",
    "vite": "^5.x"
  }
}
```
