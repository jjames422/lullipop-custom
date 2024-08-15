/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'lullipop-pink': '#e17e99',
        'lullipop-teal': '#07F2C7',
        'deep-plum': '#4B2843',
        'soft-coral': '#FFA07A',
        'off-white': '#F9F9F9',
        'light-gray': '#E5E5E5',
        'charcoal-gray': '#333333',
        'vibrant-yellow': '#FFD700',
        'muted-navy': '#002C3E',
      },
    },
  },
  plugins: [nextui()],
};
