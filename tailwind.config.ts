/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from 'fluid-tailwind';
import config from './src/tailwind';

module.exports = {
  content: {
    extract,
    files: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
