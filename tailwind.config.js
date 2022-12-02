module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a4f9c1",

          secondary: "#e2655d",

          accent: "#e537ae",

          neutral: "#14213D",

          "base-100": "#F6F5FA",

          info: "#2E79DC",

          success: "#64D8C9",

          warning: "#FFB703",

          error: "#F34962",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'primary-yellow':'#FFB703',
        'secondary-yellow':'#FB8500',
        'primary-blue':'#023047',
        'secondary-blue':'#14213D',
      }
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
};
