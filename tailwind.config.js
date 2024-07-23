/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
      container: {
        padding: "2rem",
        center: true,
      },
    },
  },
  plugins: [],
};
