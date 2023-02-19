/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	theme: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/typography')
		// ...
	],
	content: ['./src/**/*.{html,js,svelte,ts}']
};
