/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		// container: {
		// 	padding: {
		// 		DEFAULT: '15px',
		// 	},
		// },
		extend: {
			screens: {
				pc: { max: '1710px' },
				lpl: { max: '1440px' },
				tb: { max: '1024px' },
				mb: { max: '768px' },
				mm: { max: '425px' },
			},
			fontFamily: {
				raleway: ['var(--font-raleway)'],
				unbounded: ['var(--font-unbounded)'],
			},
			backgroundImage: {
				hero: "url('/images/hero/hero-background.webp')",
				hero2: "url('/images/hero/hero-background-2.webp')",
				hero3: "url('/images/hero/hero-background-3.webp')",
				burger: "url('/images/header/burger-background.svg')",
				footer: "url('/images/footer/footer-background.svg')",
				'our-client': "url('/images/our-client/our-client-bg.jpg')",
				contact: "url('/images/contact/contact-background.jpg')",
			},
			colors: {
				white: '#FFFFFF',
				black: '#12191C',
				bdGray: '#E6E6E6',
				accent: '#37C0F6',
				myBrown: 'rgba(255, 255, 255, 0.20)',
				footerRgb: 'rgba(255, 255, 255, 0.12)',
			},
			boxShadow: {
				'custom-combined':
					'0 14px 30px 0 rgba(157, 167, 170, 0.08), 0 4px 8px 0 rgba(157, 167, 170, 0.16)',
			},
		},
	},
	plugins: [],
}
