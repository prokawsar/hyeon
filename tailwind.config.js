/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					300: '#60D8CE',
					400: '#03C1B1',
					500: '#30D5C8'
				}
			}
		}
	},
	plugins: []
}
