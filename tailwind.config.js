// @type {import('tailwindcss').Config}
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./app.vue",
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1.25rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "2rem",
                xl: "2rem",
                "2xl": "4rem",
            },
        },

        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1480px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        fontFamily: {
            display: ["Playfair Display", "sans-serif"],
            body: ["Playfair Display", "sans-serif"],
            // body: ["Outfit", "sans-serif"],
        },

        boxShadow: {
            xs: "0px 1px 2px rgba(17, 24, 39, 0.05)",
            sm: "0px 1px 3px rgba(17, 24, 39, 0.1), 0px 1px 2px rgba(17, 24, 39, 0.06)",
            md: "0px 4px 8px -2px rgba(17, 24, 39, 0.1), 0px 2px 4px -2px rgba(17, 24, 39, 0.06)",
            lg: "0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)",
            xl: "0px 20px 24px -4px rgba(17, 24, 39, 0.1), 0px 8px 8px -4px rgba(17, 24, 39, 0.04)",
            "2xl": "0px 24px 48px -12px rgba(17, 24, 39, 0.25)",
        },
        extend: {
            fontSize: {
                "sm": [
                    "14px",
                    {
                        letterSpacing: "0.01em",
                        lineHeight: "24px",
                    }],
                "4xl": [
                    "72px",
                    {
                        letterSpacing: "-0.025em",
                        lineHeight: "96px",
                    },
                ],

                "display-2xl": [
                    "72px",
                    {
                        letterSpacing: "-0.025em",
                        lineHeight: "96px",
                    },
                ],
                "display-xl": [
                    "60px",
                    {
                        letterSpacing: "-0.025em",
                        lineHeight: "72px",
                    },
                ],


            },
            colors: {
                gray: {
                    800: "#000000",
                    900: "#2C2C2C",
                },
                transparent: "transparent",
                current: "currentColor",
                white: "#FFFFFF",
                black: "#000000",
                instagram: "#d6249f",
                facebook: "#17A9FD",
                primary: {
                    900: "#714512",
                    600: "#996830",
                    300: "#C4A386",
                    100: "#E6D8CC",
                },
                neutral: {
                    900: "#2C2C2C",
                    700: "#444444",
                    500: "#7C7C7C",
                    300: "#D9D9D6",
                    100: "#E5E5E5",
                },
            },
            spacing: {
                18: "72px",
                22: "88px",
                30: "120px",
                62: "248px",
            },
        },
    },
    plugins: [],


};
