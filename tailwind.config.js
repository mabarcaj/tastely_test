/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            dekko: ["dekko", "Dekko", "cursive"],
            "delius-swash-caps": [
                "delius-swash-caps",
                "Delius Swash Caps",
                "cursive",
            ],
        },
    },
    plugins: [],
};
