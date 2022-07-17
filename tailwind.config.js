/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '22px',
    },

    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#64748b',
        dark: '#374151',
      },
      fontFamily: {
        IBM: ['IBM Plex Sans']
      },
      fontSize: {
        md: '17px',
        base: '14px',
      },
      boxShadow: {
        left: '0 35px 60px 600px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
