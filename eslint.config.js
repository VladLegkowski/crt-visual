import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default tseslint.config(
  // Global ignores
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/*.config.js', '**/*.config.ts', '.history/*'],
  },

  // Base recommended rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // Unicorn plugin - all rules enabled
  eslintPluginUnicorn.configs.all,

  // Project-specific config
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      // Prefer named exports over default exports for better IDE support and refactoring
      // Also prevent destructuring in function parameters for better debugging
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ExportDefaultDeclaration',
          message:
            'Prefer named exports over default exports for better IDE support and refactoring.',
        },
        {
          // Prevent destructuring in function parameters - destructure in function body instead
          selector: ':function > ObjectPattern',
          message:
            'Avoid destructuring in function parameters. Destructure in the function body for easier debugging (e.g., console.log(props) or breakpoints).',
        },
        {
          // Prevent destructuring in arrow function parameters
          selector: 'ArrowFunctionExpression > ObjectPattern',
          message:
            'Avoid destructuring in function parameters. Destructure in the function body for easier debugging (e.g., console.log(props) or breakpoints).',
        },
      ],
      // Unicorn rule overrides for React/TypeScript compatibility
      // Allow PascalCase for React components and camelCase for other files
      // Also ignore files with acronyms like GTM, IMA, CSS that don't fit standard casing
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
            camelCase: true,
          },
          ignore: [
            // Files with acronyms that don't fit standard casing patterns
            /^[A-Z]{2,}.*\.(ts|tsx)$/,
          ],
        },
      ],
      // Allow null - commonly used in React, DOM APIs, and JSON
      'unicorn/no-null': 'off',
      // Allow className, newValue, etc. - common in React and general programming
      'unicorn/no-keyword-prefix': 'off',
      // Configure abbreviations - allow common ones like props, e, args, params, cb
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            props: true,
            Props: true,
            e: true,
            args: true,
            params: true,
            cb: true,
            fn: true,
            ref: true,
            Ref: true,
            env: true,
            src: true,
            Src: true,
            ctx: true,
            Ctx: true,
          },
        },
      ],
      // Allow Array#sort() - toSorted() is not available in all environments
      'unicorn/no-array-sort': 'off',
      // Allow functions inside describe/it blocks in tests
      'unicorn/consistent-function-scoping': [
        'error',
        {
          checkArrowFunctions: false,
        },
      ],
      // Allow unused properties - TypeScript handles this better
      'unicorn/no-unused-properties': 'off',
      // Allow charCodeAt for performance-critical code
      'unicorn/prefer-code-point': 'off',
      // Allow named imports for node modules
      'unicorn/import-style': 'off',
      // Allow window over globalThis - globalThis causes TypeScript issues with browser globals
      // like window.dataLayer, window.google, etc. that have no type definitions on globalThis
      'unicorn/prefer-global-this': 'off',
      // Disable nested ternary rule - conflicts with Prettier formatting
      // Prettier handles ternary expression formatting better and more consistently
      'unicorn/no-nested-ternary': 'off',
    },
  },

  // Allow parameter destructuring in test files (Playwright/Vitest fixtures require it)
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}', '**/e2e/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ExportDefaultDeclaration',
          message:
            'Prefer named exports over default exports for better IDE support and refactoring.',
        },
        // Allow parameter destructuring in tests (for fixtures like { page, expect })
      ],
      // Allow helper functions inside describe/it blocks
      'unicorn/consistent-function-scoping': 'off',
    },
  }
);