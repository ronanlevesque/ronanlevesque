/** @type {import('tailwindcss').Config} */

import config from './src/tailwind';

module.exports = {
  ...config,
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [],
};
