const { nextui } = require("@nextui-org/react");

/** @type {import('next').NextConfig} */
const nextConfig = {
  content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};

module.exports = nextConfig;
