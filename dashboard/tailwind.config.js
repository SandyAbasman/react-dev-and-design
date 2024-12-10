/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#3A3A3A",
        green: "#00B600",
        "text-light": "#C4C4C4",
        "text-medium": "#555555",
        "off-wight": "F8F8F8",
        "border-green": "00B658",
      },
    },
  },
  plugins: [],
};
