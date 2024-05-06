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
      "pink/500": "#FF375F",
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
      "black-085": "rgba(0,0,0,.85)",
      "black-055": "rgba(0,0,0,.55)",
      "pink/950": "rgba(26, 0, 5, 1)",
      "pink/500": "#FF375F",
      "black-pink": "rgba(26,0,5,.2)",
    },
    backgroundImage: {
      "gradient-slider": "linear-gradient(180deg,rgba(18,18,20,0),#121214)",
      "border-gradient":
        "linear-gradient(180deg, rgba(251, 58, 26, 1), rgba(235, 176, 4, 1))",
      "text-gradient":
        "linear-gradient(180deg, rgba(255, 122, 0, 1), rgba(251, 101, 101, 1))",
    },
    boxShadow: {
      "glass-box": "0px 8px 32px 0px hsla(0, 0%, 0%, 0.5)",
    },
  },
  plugins: [],
};
