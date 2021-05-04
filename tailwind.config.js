module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sku: {
          light: '#EDF4FA',
          DEFAULT: '#D6E2EE',
          dark: '#BAC8D9',
          darker: '#788594',

        },
      },
      fontFamily: {
        'futuristic': ['Orbitron', 'Helvetica'],
        'note': ['Merriweather', 'Helvetica']
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}