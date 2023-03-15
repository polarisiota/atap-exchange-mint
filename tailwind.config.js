const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-pearl": "#09040D",
        "dark-purple": "#110718",
        "light-purple": "#191420",
        "very-light-purple": "#FF9AF3",
        "middle-light-purple": "#822FBC",
        "middle-grey": "#AA99C0",
        "dark-grey": "#362A44",
        "light-grey": "#4F3E63",
      },
    },
  },
  plugins: [],
};
