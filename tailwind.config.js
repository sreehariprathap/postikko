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
    screens: {
      xsm: "0px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'primary-yellow':'#FFB703',
        'secondary-yellow':'#FB8500',
        'primary-blue':'#023047',
        'secondary-blue':'#14213D',
      },
      backgroundImage: {
        // "hero-blue": "url('/assets/hero-white.svg')",
        // "hero-white": "url('/assets/hero-blue.svg')"
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
};
