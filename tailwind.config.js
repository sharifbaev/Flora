module.exports = {
  content: ["./src/**/*.{html,ts}"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#8A4D4A",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#C8F17A",
          foreground: "#000000",
        },
        light: "#E7E5E4",
        background: "#F6F3F2",

        white: "#ffffff",
        black: "#000000",
        grey: "#A8A29E",
        greybackground: "#E7E5E4",
        semigreybackground: "#FCF9F8",

        danger: {
          DEFAULT: "#D61616",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.05)",
        card: "0 4px 20px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [],
};
