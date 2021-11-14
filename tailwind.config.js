module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkBlue:"#152D35",
      darkPurple: "#261C2C",
      lightBlue:"#6E85B2",
      lila:"#5C527F",
      white: "#fff"
    },

    fill: theme => ({

      'red': theme('colors.red.500'),

      'green': theme('colors.green.500'),

      'blue': theme('colors.blue.500'),

    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
