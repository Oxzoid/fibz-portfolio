/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.jsx"],
    // mode: "jit",
    theme: {
        extend: {
            // animation: {
            //     marquee: "marquee 25s linear infinite",
            //     marquee2: "marquee 25s linear infinite",
            // },
            // keyframes: {
            //     marquee: {
            //         "0%": { transform: "translateX(0%)" },
            //         "100%": { transform: "translateX(-100%)" },
            //     },
            //     marquee2: {
            //         "0%": { transform: "translateX(100%)" },
            //         "100%": { transform: "translateX(0%)" },
            //     },
            // },
        },
    },
    plugins: [],
};
