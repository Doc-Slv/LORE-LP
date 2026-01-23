/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lore: {
          main: '#050a14', // Plus sombre, presque noir
          secondary: '#0F172A', // L'ancien main devient secondaire
          gold: '#E5C15D', // Or plus élégant, moins jaune
          'gold-light': '#FCE7A1',
          light: '#E2E8F0',
          muted: '#94A3B8',
          surface: '#111827',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #E5C15D 0%, #BFA040 100%)',
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.05\"/%3E%3C/svg%3E')",
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'glow': 'glow 4s ease-in-out infinite',
        'expand-width': 'expandWidth 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'draw': 'draw 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
        },
        expandWidth: {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    }
  },
  plugins: [],
}
