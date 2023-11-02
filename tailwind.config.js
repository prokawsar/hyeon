/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	plugins: [require('flowbite/plugin')],
	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				primary: {
					300: '#60D8CE',
					400: '#03C1B1',
					500: '#30D5C8',
					'text': '#20B9AE',
					'hero' :'#49DACF'
				},
				gray: {
					10: '#EDEDED',
					20: '#F7F7F7',
					30: '#D9D9D9'
				}
			}
		}
	}
}
