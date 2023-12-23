module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'className'
  theme: {
    extend: {
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
