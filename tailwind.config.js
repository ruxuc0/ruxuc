/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        neon: {
          green: "#00ff00",
          cyan: "#00ffff",
          blue: "#0080ff",
          purple: "#8000ff",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "Monaco", "monospace"],
      },
    },
  },
  plugins: [],
}
