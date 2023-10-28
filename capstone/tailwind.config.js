/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      4: "4px",
    },
    extend: {
      colors: {
        darkblue: "#091F56",
        orange: "#DE7B1F",
        lightblue: "#97DAFF",
      },
      spacing: {
        96: "24rem",
        128: "32rem",
      },
      height: {
        whole: "110vh",
      },
    },
    darkTheme: false,
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFFFFF",
          secondary: "#DE7B1F",
          tertiary: "#091F56",
          link: "#646cff",
          accent: "#DE7B1F",
          neutral: "#d4d4d4",
          info: "#3c8fe2",
          success: "#1e8f51",
          warning: "#f1991e",
          error: "#ed2c52",
        },
      },
    ],
  },
};
