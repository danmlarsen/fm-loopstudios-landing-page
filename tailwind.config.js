/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts}'],
    theme: {
        extend: {
            colors: {
                grey: {
                    500: 'hsl(0, 0%, 55%)',
                    600: 'hsl(0, 0%, 41%)',
                    default: 'hsl(0, 0%, 41%)',
                },
            },
            fontFamily: {
                sans: ['Alata', 'Josefin Sans', 'sans-serif'],
                heading: ['Josefin Sans', 'Alata', 'sans-serif'],
            },
            backgroundImage: {
                hero: 'url("/images/mobile/image-hero.jpg")',
                'hero-desktop': 'url("/images/desktop/image-hero.jpg")',
                interactive: 'url("/images/mobile/image-interactive.jpg")',
                interactive: 'url("/images/desktop/image-interactive.jpg")',
            },
            spacing: {
                xxl: '69.375rem',
            },
        },
    },
    plugins: [],
};
