import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-cream': '#EDF0DD', // Main page background
        'header-cream': '#FAF9F6', // Header background
        'olive-dark': '#6B7E38',
        'olive-light': '#A8C878',
        'card-white': '#FFFFFF',
        'text-main': '#333333',
        'text-sub': '#666666',
      },
      fontFamily: {
        serif: ['Mundial', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        sans: ['Mundial', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}
export default config

