import { Theme, useTheme } from "@emotion/react";
import Color from "color";
import facepaint from "facepaint";

export interface Palette {
	/** Color */
	c: string,
	/** Color Text*/
	c_t: string,
	/** Color Dark */
	cd: string,
	/** Color Dark Text*/
	cd_t: string,
	/** Color Light*/
	cl: string,
	/** Color Light Text*/
	cl_t: string,
}
function createPalette(color: string | Color) {
	let c = typeof color === 'string' ? Color(color) : color;
	const getText = (col: Color) => col.isDark() ? 'white' : 'black';

	let d = c.darken(.2), l = c.lighten(.2);
	let p: Palette = {
		c: c.hex(),
		cd: d.hex(),
		cl: l.hex(),

		c_t: getText(c),
		cd_t: getText(d),
		cl_t: getText(l),
	}
	return p;
}

// enum Typography {
// 	Phone = 0,
// 	Tablet,
// 	Desktop
// }

export const palette = (t: Theme, palette?: string): Palette => {
	if (!palette) return Object.values(t.palettes)[0];
	let p = t.palettes[palette]
	return p ? p : Object.values(t.palettes)[0]
}

const palettes = {
	primary: createPalette('#3434eb'),
	secondary: createPalette('#8934eb')
}

/** Adds facepaint, theme, and palette selection */
export function useS(t, c, f: (p: Palette) => any) {
	// Try to merge prop and state in that order
	let merged = { ...c.props, ...c.state }
	let j = f(palette(t as Theme, merged.palette))
	return t.mq ? t.mq(j) : j
}

const themes: Theme[] = [
	{
		...palettes,
		palettes: palettes,
		// colors: {...Object.entries(createPalette('#3434eb')).map(([k,v])), },
		background: '#000',
		animations_length: .4,
		// typography: ['16px', ]

		// mq: facepaint(
		// 	[320, 599, 1024]
		// 		.map(v => `@media(min-width: ${v}px)`)
		// 	, {
		// 		literal: false, // output should match arguments given to facepaint exactly
		// 		overlap: false, // overlap values that occur in multiple media queries or slots
		// 	}),
		
		breakpoints: ['40em', '52em', '64em'],
		fontSizes: [
			12, 14, 16, 20, 24, 32, 48, 64
		],
		// colors: {
		// 	...Object.entries(palettes).map(([k,v]) => {
		// 		return 
		// 	}),
		// 	blue: '#07c',
		// 	lightgray: '#f6f6ff'
		// },
		space: [
			0, 4, 8, 16, 32, 64, 128, 256
		],
		fonts: {
			body: 'system-ui, sans-serif',
			heading: 'inherit',
			monospace: 'Menlo, monospace',
		},
		fontWeights: {
			body: 400,
			heading: 700,
			bold: 700,
		},
		lineHeights: {
			body: 1.5,
			heading: 1.25,
		},
		shadows: {
			small: '0 0 4px rgba(0, 0, 0, .125)',
			large: '0 0 24px rgba(0, 0, 0, .125)'
		},
		variants: {
		},
		text: {
		},
		buttons: {
			primary: {
				color: 'white',
				bg: 'primary',
			}
		}
	}
]

export default themes;