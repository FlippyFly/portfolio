// eslint.config.mts
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  js.configs.recommended,              // Regras base JS
  ...tseslint.configs.recommended,     // TypeScript
  pluginReact.configs.recommended,     // React
  reactHooks.configs.recommended,      // React Hooks
  jsxA11y.flatConfigs.recommended,     // Acessibilidade
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
      'react-hooks': reactHooks,
      prettier,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',

      // TypeScript
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Prettier
      'prettier/prettier': ['error'],

      // Acessibilidade (principais regras)
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/no-noninteractive-tabindex': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
