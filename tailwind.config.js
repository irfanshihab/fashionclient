/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackground: "#f0f4f8", // Custom background color
        customButton: "#1da1f2", // Custom button color
        customButtonHover: "#0c7abf", // Custom button hover color
        customText: "#333333", // Custom text color
      },
    },
  },
  plugins: [],
};
