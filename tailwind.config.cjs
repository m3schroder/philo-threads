const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	important: true,
	content: [
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
		"./src/routes/**/*.{html,js,svelte,ts}",
		"./src/components/**/*.{html,js,svelte,ts}"
	],
	safelist: [

	],
	theme: {
		extend: {
			colors: {
				forest: {
					accent: "#0B3D2E",
					DEFAULT: '#B5C9B4'
				}
			},
			animation: {
			},
			borderWidth: {
				"1": "1px"
			},
			boxShadow: {
			},
		},
		plugins: [
			require('@tailwindcss/aspect-ratio'),
			require('flowbite/plugin')
		],
		darkMode: 'class',
	}
}

module.exports = config;