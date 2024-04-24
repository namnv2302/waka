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
      "white-50": "rgba(242, 242, 242, 1)",
      "black/600": "#666666",
      "FM/500": "#FA573E",
      "comic/900": "#332900",
    },
    // textColor: {
    //   "white-50": "rgba(242, 242, 242, 1)",
    // },
    borderColor: {
      "white-overlay": "hsla(0,0%,100%,.1)",
      "comic-500": "hsla(48, 100%, 50%, 1)",
    },
    backgroundColor: {
      "dark-overlay": "hsla(240, 5%, 7%, 0.8)",
      "white-overlay": "hsla(0, 0%, 100%, 0.1)",
      background: "rgba(18, 18, 20, 1)",
      primary: "#15B088",
      "progress-overlay": "rgba(18, 18, 20, 0.6)",
    },
    boxShadow: {
      "glass-box": "0px 8px 32px 0px hsla(0, 0%, 0%, 0.5)",
    },
  },
  plugins: [],
};
