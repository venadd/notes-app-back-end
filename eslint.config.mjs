import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  // Konfigurasi dari Dicoding Academy
  daStyle,

  // Konfigurasi ESLint JS Recommended
  {
    files: ['**/*.{js,mjs,cjs}'],
    ...js.configs.recommended,
  },

  // Mengatur sourceType menjadi commonjs untuk file JS
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },

  // Menentukan global variabel untuk browser dan Node.js
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
]);
