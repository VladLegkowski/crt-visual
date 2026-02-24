# Project Starter

A React 18 project starter with Parcel.js, TypeScript, and comprehensive tooling setup.

## Features

- **React 18** with TypeScript
- **Parcel.js** for fast bundling and development
- **Vitest** for unit testing with React Testing Library
- **Playwright** for end-to-end testing
- **ESLint** with comprehensive rules (including Unicorn plugin)
- **Prettier** for code formatting
- **Husky** for git hooks
- **lint-staged** for pre-commit linting

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Testing

Run unit tests:

```bash
npm run test
```

Run unit tests in watch mode:

```bash
npm run test:watch
```

Run end-to-end tests:

```bash
npm run test:e2e
```

### Building

Build for production:

```bash
npm run build
```

### Code Quality

Run type checking:

```bash
npm run typecheck
```

Run linting:

```bash
npm run lint
```

Fix linting issues:

```bash
npm run lint:fix
```

Format code:

```bash
npm run format
```

Run all quality checks:

```bash
npm run check:all
```

## Project Structure

```
src/
├── app.tsx          # Main App component
├── app.test.tsx     # Unit tests for App
├── main.tsx         # React DOM entry point
├── index.html       # HTML entry point for Parcel
└── setupTests.ts    # Test setup configuration

e2e/
└── app.spec.ts      # End-to-end tests

.husky/
├── pre-commit       # Pre-commit git hook
└── pre-push         # Pre-push git hook
```

## Configuration

The project uses the same linting, formatting, and testing setup as the FIFA web-player project, ensuring consistency and best practices.

### Git Hooks

- **Pre-commit**: Runs TypeScript type checking and lint-staged (ESLint, Prettier, related tests)
- **Pre-push**: Runs all quality checks (typecheck, lint, test, e2e) before pushing

## Requirements

- Node.js >= 24.0.0
- npm