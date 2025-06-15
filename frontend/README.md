
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project Structure

Everse_Academy/
├── public/                     # Static assets like images, fonts, etc.
├── src/                        # Main source code
│   ├── components/             # Reusable UI components
│   │   ├── layout/             # Layout components (e.g., Header, Footer)
│   │   ├── sections/           # Page-specific sections (e.g., JoinBetaSection)
│   │   ├── shared/             # Shared components (e.g., CountdownTimer, Modal)
│   │   ├── ui/                 # Low-level UI components (e.g., buttons, dropdowns)
│   ├── data/                   # Static data (e.g., betaSteps, betaBenefits)
│   ├── pages/                  # Page components (e.g., HomePage, PrivacyPage)
│   ├── styles/                 # Global and component-specific styles
│   ├── utils/                  # Utility functions (e.g., helpers, API calls)
│   ├── App.tsx                 # Main application entry point
│   ├── index.tsx               # React DOM rendering entry point
│   ├── themeProvider.tsx       # Theme context provider
│   ├── routes/                 # Route definitions
│   └── assets/                 # Project-specific assets (e.g., icons, logos)
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── README.md                   # Project documentation
└── .gitignore                  # Git ignore file
