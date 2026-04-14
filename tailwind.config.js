/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pending': '#f59e0b',
        'completed': '#10b981',
        'high-priority': '#ef4444',
        'medium-priority': '#3b82f6',
        'low-priority': '#10b981',
      },
    },
  },
  plugins: [],
}