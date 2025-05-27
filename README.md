
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

##Project Structure

src/
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── NewsletterForm.tsx
│   ├── sections/
│   │   ├── HeroLaunchSection.tsx
│   │   ├── JoinBetaSection.tsx
│   │   ├── WhyPlatformSection.tsx
│   │   ├── CoursesShowcaseSection.tsx
│   ├── shared/
│   │   ├── CountdownTimer.tsx
│   │   └── SectionHeader.tsx
│   └── icons/
│       └── SocialIcons.tsx
│
├── pages/
│   └── LandingPage.tsx
│
├── data/
│   └── courses.ts
│   └── features.ts
│   └── betaSteps.ts
│
├── hooks/
│   └── useCountdown.ts (optional, for reusability)
│
├── App.tsx
└── main.tsx
