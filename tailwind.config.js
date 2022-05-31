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
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
