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
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      // Fluid type scale (clamp) with a real weight hierarchy.
      fontSize: {
        display: ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.04', letterSpacing: '-0.03em', fontWeight: '700' }],
        h1: ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['clamp(1.75rem, 4vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }],
        h3: ['clamp(1.25rem, 3vw, 1.75rem)', { lineHeight: '1.3', fontWeight: '500' }],
        eyebrow: ['0.8125rem', { lineHeight: '1', letterSpacing: '0.16em' }],
      },
      colors: {
        // Near-black foundation + neutral surface tiers (industrial, no purple tint).
        background: '#030308',
        surface: {
          DEFAULT: '#0A0B0F',
          light: '#15171D',
        },
        // ONE confident blue signal accent (refined, less neon than the old #0EA5E9).
        primary: {
          DEFAULT: '#2E8BE6',
          hover: '#1F6FBF',
          glow: 'rgba(46, 165, 233, 0.35)',
        },
        // Lighter blue used only for gradient sheen (keeps gradients monochromatic).
        accent: '#56A8EE',
        'accent-glow': 'rgba(86, 168, 238, 0.30)',
        // Indigo retired -> muted steel-blue so legacy `secondary` usages stay coherent.
        secondary: {
          DEFAULT: '#3B6FA0',
          glow: 'rgba(59, 111, 160, 0.35)',
        },
        // ONE warm instrument accent, reserved for status / flight-heritage / data callouts.
        ember: {
          DEFAULT: '#E0701A',
          hover: '#C25E12',
          glow: 'rgba(224, 112, 26, 0.30)',
          subtle: 'rgba(224, 112, 26, 0.12)',
        },
        // 8-step technical-neutral ramp.
        neutral: {
          50: '#F7F8FA',
          100: '#EDEFF2',
          200: '#D6DAE0',
          300: '#AEB4BE',
          400: '#7E8590',
          500: '#5B616B',
          600: '#3F444C',
          700: '#2A2E34',
          800: '#1A1D22',
          900: '#101216',
          950: '#070809',
        },
        // Semantic status colors.
        success: '#3FB27F',
        warning: '#E0A91A',
        danger: '#E0533F',
        text: {
          primary: '#F4F6F8',
          secondary: '#AEB4BE',
          muted: '#7E8590',
          faint: '#5B616B',
        },
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        38: '9.5rem',
      },
      boxShadow: {
        'elev-1': '0 1px 2px rgba(0, 0, 0, 0.4)',
        'elev-2': '0 8px 24px -8px rgba(0, 0, 0, 0.6)',
        'signal': '0 0 0 1px rgba(46, 139, 230, 0.25)',
      },
      backgroundImage: {
        'hero-pattern': "radial-gradient(circle at center, #0B0D12 0%, #030308 100%)",
        'glow-gradient': "linear-gradient(to right, #2E8BE6, #56A8EE)",
        'mesh-gradient': "radial-gradient(ellipse at 20% 50%, rgba(46, 139, 230, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(224, 112, 26, 0.05) 0%, transparent 50%)",
        'section-fade': "linear-gradient(to bottom, transparent, rgba(10, 11, 15, 0.8), transparent)",
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(46, 139, 230, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(46, 139, 230, 0.6)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
