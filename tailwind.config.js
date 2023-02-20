/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// rotate: {
			// 	120: "120deg",
			// },
			colors: {
				black: "#000512",

				primary: {
					black: "#000512",
					lighter: "#0a0512",
				},
				green: {
					100: "#d8f3dc",
					200: "#b7e4c7",
					300: "#95d5b2",
					400: "#74c69d",
					500: "#52b788",
					600: "#40916c",
					700: "#2d6a4f",
					800: "#1b4332",
					900: "#081c15",
				},
			},
			fontFamily: {
				roboto_slab: ['"Roboto Slab"'],
				poppins: ["poppins", "Georgia"],
				lato: ["lato"],
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { left: 215 },
					"50%": { left: 220 },
				},
				swing: {
					"0%, 100%": { transform: "rotate(1deg)" },
					"50%": { transform: "rotate(-1deg)" },
				},
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
				swing: "swing 6s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
