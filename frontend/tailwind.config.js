/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: 'var(--surface)',
        'surface-low': 'var(--surface-low)',
        text: 'var(--text)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        'text-on-accent': 'var(--text-on-accent)',
      },
      fontFamily: {
        serif: ["Noto Serif", "serif"],
        sans: ["Inter", "sans-serif"],
        headline: ["Noto Serif", "serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
