// Shared Tailwind theme — loaded right after the Tailwind CDN script on every page.
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        mint: {
          50:  '#f0f9f6',
          100: '#d6f0e8',
          200: '#aee0d1',
          300: '#7dcab8',
          400: '#4aad99',
          500: '#2e9180',
          600: '#1e7468',
          700: '#175c52',
          800: '#124843',
          900: '#0d3633',
        },
        sand: '#f7f5f0',
        ink:  '#1a2626',
      },
    },
  },
};
