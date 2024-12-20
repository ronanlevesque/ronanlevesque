/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from 'fluid-tailwind';
import config from './src/tailwind';

module.exports = {
  content: {
    extract,
    files: [
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  },
  theme: {
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }) => ({
      defaultScreens: [theme('screens.xs'), theme('screens.lg')],
    }),
    fontSize,
    screens,
    ...config,
  },
  plugins: [fluid],
};
