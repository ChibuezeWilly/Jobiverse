export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
          sm: "576px",
          md: "765px", 
          lg: "992px", 
          xl: "1200px", 
          xxl: "1400px",
      },
    },
  },
  plugins: [],
}