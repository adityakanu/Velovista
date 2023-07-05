/** @type {import('tailwindcss').Config} */
import plugin from "tw-elements/dist/plugin.cjs";
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Ysabeau Office", "sans"],
                serif: ["Belanosima", "sans-serif"],
            },
            colors: {
                mint: "#34FFAA",
            },
        },
    },
    plugins: [plugin],
    darkMode: "class",
};
