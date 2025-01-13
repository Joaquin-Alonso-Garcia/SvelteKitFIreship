import type { Config } from 'tailwindcss';
import daysiui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [daysiui],
} satisfies Config;
