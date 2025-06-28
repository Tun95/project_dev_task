/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgreen: "lightgreen",
        "error-red": "#a02020",
        "error-bg": "#ffe0e0",
        "info-blue": "#2020ae",
        "info-bg": "#e0e0ff",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        accent: {
          50: "#F5F3FF",
          500: "#6366F1",
          600: "#4F46E5",
        },
      },
      screens: {
        "max-1200px": { max: "1200px" },
        "max-900px": { max: "900px" },
        "max-767px": { max: "767px" },
        "max-565px": { max: "565px" },
        "max-480px": { max: "480px" },
        "max-420px": { max: "420px" },
        "max-380px": { max: "380px" },
        "max-360px": { max: "360px" },
        "max-345px": { max: "345px" },
        lg: "1200px",
      },
      transitionProperty: {
        width: "width",
        transform: "transform",
      },
      fontFamily: {
        display: ["PP Mori", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
