/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#5A6ACF', // Bright Purple
      secondary: '#A6ABC8', // Light Gray
      background: '#F1F2F7', // Off-Purple
      muted: '#707FDD', // Light Blue
      highlight: '#5A67BA', // Medium Purple
      fonty:"#273240",
      greeny:"green",
      mutedfont:"#737B8B",
      redy:"red",
      beigee: '#FFE6CC',
      border:"#C8CBD9"

    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'], 
    },
  },
  plugins: [],
}

