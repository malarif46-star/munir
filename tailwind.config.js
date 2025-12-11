/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fff1f2',
                    100: '#ffe4e6',
                    200: '#fecdd3',
                    300: '#fda4af',
                    400: '#fb7185',
                    500: '#f43f5e',
                    600: '#e11d48',
                    700: '#be123c',
                    800: '#9f1239',
                    900: '#881337',
                },
                sport: {
                    primary: '#FF4500',   // Orange Red
                    secondary: '#1E90FF', // Dodger Blue
                    accent: '#32CD32',    // Lime Green
                    dark: '#1A1A1A',
                    light: '#F5F5F7',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Inter', 'system-ui', 'sans-serif'], // In a real scenario, I'd add a bolder font here
            },
            skew: {
                '12': '12deg',
            }
        },
    },
    plugins: [],
}
