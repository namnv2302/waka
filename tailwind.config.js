/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#15B088",
      white: "#fff",
      second: "#F2F2F2",
      comic: "#FFCC00",
    },
    borderColor: {
      "white-overlay": "hsla(0,0%,100%,.1)",
      "comic-500": "hsla(48, 100%, 50%, 1)",
    },
    backgroundColor: {
      "dark-overlay": "hsla(240, 5%, 7%, 0.8)",
      "white-overlay": "hsla(0, 0%, 100%, 0.1)",
    },
  },
  plugins: [],
};
