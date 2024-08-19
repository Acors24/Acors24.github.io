/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Kanit", "sans-serif"],
            },
            colors: {
                primary: "#ff1f48"
            }
        },
    },
    plugins: [],
};
