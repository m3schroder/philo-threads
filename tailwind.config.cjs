const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	content: [
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
		"./src/routes/**/*.{html,js,svelte,ts}",
		"./src/components/**/*.{html,js,svelte,ts}"
	],
	safelist: [

	],
	theme: {
		extend: {
			fontFamily: {
				animation: {
				},
				borderWidth: {
					"1": "1px"
				},
				boxShadow: {
				},
			}
		},
		plugins: [
			require('@tailwindcss/aspect-ratio'),
			require('flowbite/plugin')
		],
		darkMode: 'class',
	}
}

module.exports = config;