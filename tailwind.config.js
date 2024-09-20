/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#222261', 
          dark: '#5A1E96',    // A darker shade for hover effects
        },
        secondary: {
          DEFAULT: '#8A2BE2', 
          dark: '#222261',    // Matches the new primary color
        },
        accent: {
          teal: '#3C3C3D',    
          orange: '#F7931A',  
          green: '#39FF14',  
          pink: '#FF007F',   
        },
        neutral: {
          dark: '#212121',    
          medium: '#4E4E50',  
          light: '#C5C6C7',  
        },
        alert: {
          success: '#28A745', // Success Green
          warning: '#FFC107', // Warning Yellow
          danger: '#DC3545',  // Danger Red
        },
      },
    },
  },
  darkMode: 'media', 
  plugins: [],
}

