/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#DBEAFE',
        },
        secondary: {
          DEFAULT: '#14B8A6',
          dark: '#0F766E',
          light: '#CCFBF1',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        darkbg: '#0F172A',
        darkcard: '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        medical: '0 4px 20px -2px rgba(37, 99, 235, 0.08), 0 2px 8px -1px rgba(0, 0, 0, 0.04)',
        medicalDark: '0 4px 20px -2px rgba(15, 23, 42, 0.5), 0 2px 8px -1px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'medical-lg': '18px',
        'medical-md': '14px',
      }
    },
  },
  plugins: [],
}
