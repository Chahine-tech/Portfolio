module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        BounceIn: "BounceIn 1s ease 0s 1 normal forwards",
      },
      keyframes: {
        BounceIn: {
          "0%": {
            transitionTimingFunction: "ease-in",
            opacity: "0",
            transform: "translateY(-250px)",
          },

          "38%": {
            transitionTimingFunction: "ease-out",
            opacity: "1",
            transform: "translateY(0)",
          },

          "55%": {
            transitionTimingFunction: "ease-in",
            transform: "translateY(-65px)",
          },

          "72%": {
            transitionTimingFunction: "ease-out",
            transform: "translateY(0)",
          },

          "81%": {
            transitionTimingFunction: "ease-in",
            transform: "translateY(-28px)",
          },

          "90%": {
            transitionTimingFunction: "ease-out",
            transform: "translateY(0)",
          },

          "95%": {
            transitionTimingFunction: "ease-in",
            transform: "translateY(-8px)",
          },

          "100%": {
            transitionTimingFunction: "ease-out",
            transform: "translateY(0)",
          },
        },
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
};
