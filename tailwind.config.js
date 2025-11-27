/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        background: '#030303',
        surface: '#121212',
        primary: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          glow: 'rgba(59, 130, 246, 0.5)'
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          glow: 'rgba(139, 92, 246, 0.5)'
        },
        text: {
          primary: '#F3F4F6',
          secondary: '#9CA3AF',
          muted: '#6B7280'
        }
      },
      backgroundImage: {
        'hero-pattern': "radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)",
        'glow-gradient': "linear-gradient(to right, #3B82F6, #8B5CF6)",
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}