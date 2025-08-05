import plugin from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export const content = [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  screens: {
    xsm: '390px',
    sm: '640px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
  extend: {
    colors: {
      primary: '#131424',
      secondary: '#393A47',
      accent: '#F13024',
    },
    backgroundImage: {
      explosion: 'url("/bg-explosion.png")',
      circles: 'url("/bg-circles.png")',
      circleStar: 'url("/circle-star.svg")',
      site: 'url("/site-bg.svg")',
    },
    animation: {
      'spin-slow': 'spin 6s linear infinite',
    },
    fontFamily: {
      poppins: ['var(--font-poppins)', 'sans-serif'],
      sora: ['var(--font-sora)', 'sans-serif'],
    },
  },
};
export const plugins = [plugin];
