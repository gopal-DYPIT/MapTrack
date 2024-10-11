/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'agriculture-green': '#228B22', // Custom green color
      },
      fontFamily: {
        primaryRegular: ["Roboto-Regular"],
        primaryBold: ["Roboto-Bold"],
      },
      backgroundImage: {
        "BG!": "url('../public/BG!.jpg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-3d": {
          textShadow:
            "1px 1px 2px rgba(34, 139, 34, 0.2), 2px 2px 4px rgba(34, 139, 34, 0.2), 3px 3px 6px rgba(34, 139, 34, 0.2)",
        },
      });
    },
  ],
};
