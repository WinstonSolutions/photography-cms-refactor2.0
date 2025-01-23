/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#1f1925",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
      animation: {
        'slowWave': 'wave 3s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateY(-96px)' },
          '100%': { transform: 'translateY(-96px)' },
        }
      }
    },
  },
  plugins: [],
};
