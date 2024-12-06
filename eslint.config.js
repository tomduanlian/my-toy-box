import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    { ignores: ['dist', '**/node_modules/**'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: { react: { version: '18.3' } },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            indent: ['error', 4], // Enforce 4 spaces
            'linebreak-style': ['error', 'unix'], // Enforce Unix line endings
            quotes: ['error', 'single'], // Enforce single quotes
            semi: ['error', 'always'], // Enforce semicolons
            'react/react-in-jsx-scope': 'off', // If using React 17+
        },
    },
];
