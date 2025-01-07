/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#1F1F1F',
        snow: '#FFFCFB',
        seashell: '#FFF1EC',
        'atomic-tangerine': '#FFA385',
        mauve: '#EA90F4'
      },
    },
  },
  plugins: [],
};
