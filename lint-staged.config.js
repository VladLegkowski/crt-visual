/**
 * Lint-staged configuration for carto-take-home-assignment
 *
 * This configuration handles:
 * - ESLint with auto-fix for TypeScript/TSX files
 * - Prettier formatting
 * - Vitest for related tests
 * - TypeScript type-checking (project-wide to respect tsconfig.json)
 *
 * Note: TypeScript's tsc --noEmit is run project-wide (not on individual files)
 * to avoid TS17004 and TS1056 errors that occur when tsc ignores tsconfig.json
 * when files are passed directly as arguments.
 *
 * ESLint flags:
 * - --no-warn-ignored: Suppresses warnings for files ignored by ESLint config
 * - --max-warnings=0: Treats warnings as errors for strict linting
 */

export default {
  // TypeScript and TSX files: lint, format, and run related tests
  '*.{ts,tsx}': [
    'eslint --fix --no-warn-ignored --max-warnings=0',
    'prettier --write',
    'vitest related --run',
  ],

  // JavaScript and JSX files: lint and format
  // Note: Uses function to filter out ignored files to prevent SIGKILL issues
  '*.{js,jsx,mjs,cjs}': (filenames) => [
    `eslint --fix --no-warn-ignored --max-warnings=0 ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  // JSON, YAML, Markdown, and other config files: format only
  '*.{json,yaml,yml,md,css,html}': ['prettier --write'],
};