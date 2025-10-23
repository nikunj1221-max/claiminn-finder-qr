/** @type {import('tailwindcss').Config} */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./components/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  //list: [
  //   'bg-background',
  //   'text-foreground',
  //   // Add other custom classes here
  // ],


// postcss.config.cjs  (CommonJS)



  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
    ...(isProd ? [require("cssnano")({ preset: "default" })] : []),
  ],
};

