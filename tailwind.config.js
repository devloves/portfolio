module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'className'
  theme: {
    extend: {
      animation: {
        'float-up': 'float-up 2s ease-in-out infinite', // Name and duration
      },
      keyframes: {
        'float-up': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'my-gradient': 'url("/background.png")'
      },
      fontFamily: {
        sans: ["var(--font-rubik)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
