/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#070A0F',
        'orbital': '#0C111A',
        'primary': '#F5F7FA',
        'muted': '#B8C0CC',
        'earth': '#2F80ED',
        'atmosphere': '#56CCF2',
        'starlight': '#1B2230',
        'dust': '#8892A6',
      },
      screens: {
        'xs': '480px',
        'nav': '900px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        kufam: ['Kufam', 'sans-serif'],
        konkhmer: ['Konkhmer Sleokchher', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up-sm': {
          from: { opacity: '0', transform: 'translateY(15px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'sat-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease forwards',
        'fade-in-up-sm': 'fade-in-up-sm 0.5s ease forwards',
        'sat-float': 'sat-float 6s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
