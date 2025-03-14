/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#FF79C6',
                comment: '#6272A4',
                current_line: '#44475A',
                background: '#282A36',
                foreground: '#F8F8F2',
            }
        }
    }
};
