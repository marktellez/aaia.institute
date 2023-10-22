module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
