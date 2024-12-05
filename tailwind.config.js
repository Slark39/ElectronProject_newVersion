/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "media",
	theme: {
		extend: {
		  colors: {
			primaryColor: '#a9a247',
			secondaryColor: '#ad254b',
			thirdColor: '#525f7f',
			fourthColor: '#fe0b41',
			fivthColor: '#494c51',
			tableColor: '#404040',
		  }
		},
		fontFamily: {
		  sans: ['Brown', 'Arial', 'sans-serif']
		}
	  },
};
