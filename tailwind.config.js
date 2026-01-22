/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "text-emerald-600",
    "text-amber-600",
    "text-rose-600",
    "bg-slate-50",
    "bg-white",
    "border-slate-200",
  ],
};
