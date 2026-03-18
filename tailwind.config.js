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
        background: '#030308',
        surface: {
          DEFAULT: '#0A0A0F',
          light: '#141420',
        },
        primary: {
          DEFAULT: '#0EA5E9',
          hover: '#0284C7',
          glow: 'rgba(14, 165, 233, 0.4)'
        },
        secondary: {
          DEFAULT: '#6366F1',
          glow: 'rgba(99, 102, 241, 0.4)'
        },
        accent: '#22D3EE',
        'accent-glow': 'rgba(34, 211, 238, 0.3)',
        text: {
          primary: '#F3F4F6',
          secondary: '#9CA3AF',
          muted: '#6B7280'
        }
      },
      backgroundImage: {
        'hero-pattern': "radial-gradient(circle at center, #0a0a1a 0%, #030308 100%)",
        'glow-gradient': "linear-gradient(to right, #0EA5E9, #22D3EE)",
        'mesh-gradient': "radial-gradient(ellipse at 20% 50%, rgba(14, 165, 233, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)",
        'section-fade': "linear-gradient(to bottom, transparent, rgba(10, 10, 15, 0.8), transparent)",
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(14, 165, 233, 0.6)' },
        },
      }
    },
  },
  plugins: [],
}
