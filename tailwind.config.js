/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Rubik: ['Rubik Glitch'],
				Kanit: ['Kanit'],
				Chakra: ['Chakra Petch'],
			},
		},
	},
	plugins: [],
};
