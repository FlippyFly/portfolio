import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node, // Caso tenha código para Node também
      },
    },
    plugins: {
      js,
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
      'react-hooks': reactHooks,
      prettier,
    },
    rules: {
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off', // seguro para Next.js ou React 17+

      // TypeScript
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Prettier
      'prettier/prettier': [
        'error',
      ],
    },
    settings: {
      react: {
        version: 'detect', // Detecta versão do React automaticamente
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.recommended,
  reactHooks.configs.recommended,
];
