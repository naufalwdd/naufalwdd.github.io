/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ink: '#080a0d',
                surface: '#101419',
                lime: '#c8ff5a',
                cyan: '#77e6e0',
                accent: {
                    DEFAULT: '#c8ff5a',
                    light: '#d9ff78',
                    dark: '#86b52d',
                },
            },
            fontFamily: {
                sans: ['Manrope', 'system-ui', 'sans-serif'],
                mono: ['DM Mono', 'monospace'],
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'medium': '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 12px 25px -5px rgba(0, 0, 0, 0.06)',
                'large': '0 10px 40px -5px rgba(0, 0, 0, 0.1), 0 20px 50px -10px rgba(0, 0, 0, 0.08)',
                'glow': '0 0 20px rgba(13, 148, 136, 0.15)',
                'glow-lg': '0 0 30px rgba(13, 148, 136, 0.25)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'slide-up': 'slideUp 0.5s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
