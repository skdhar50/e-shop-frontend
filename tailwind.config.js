module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "7.5rem",
			},
			fontFamily: {
				sans: ["Open Sans", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			zIndex: {
				100: "100",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
