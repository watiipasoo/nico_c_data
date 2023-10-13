
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #2d5dfa 
		"--color-primary-50": "224 231 254", // #e0e7fe
		"--color-primary-100": "213 223 254", // #d5dffe
		"--color-primary-200": "203 215 254", // #cbd7fe
		"--color-primary-300": "171 190 253", // #abbefd
		"--color-primary-400": "108 142 252", // #6c8efc
		"--color-primary-500": "45 93 250", // #2d5dfa
		"--color-primary-600": "41 84 225", // #2954e1
		"--color-primary-700": "34 70 188", // #2246bc
		"--color-primary-800": "27 56 150", // #1b3896
		"--color-primary-900": "22 46 123", // #162e7b
		// secondary | #0021ae 
		"--color-secondary-50": "217 222 243", // #d9def3
		"--color-secondary-100": "204 211 239", // #ccd3ef
		"--color-secondary-200": "191 200 235", // #bfc8eb
		"--color-secondary-300": "153 166 223", // #99a6df
		"--color-secondary-400": "77 100 198", // #4d64c6
		"--color-secondary-500": "0 33 174", // #0021ae
		"--color-secondary-600": "0 30 157", // #001e9d
		"--color-secondary-700": "0 25 131", // #001983
		"--color-secondary-800": "0 20 104", // #001468
		"--color-secondary-900": "0 16 85", // #001055
		// tertiary | #33734a 
		"--color-tertiary-50": "224 234 228", // #e0eae4
		"--color-tertiary-100": "214 227 219", // #d6e3db
		"--color-tertiary-200": "204 220 210", // #ccdcd2
		"--color-tertiary-300": "173 199 183", // #adc7b7
		"--color-tertiary-400": "112 157 128", // #709d80
		"--color-tertiary-500": "51 115 74", // #33734a
		"--color-tertiary-600": "46 104 67", // #2e6843
		"--color-tertiary-700": "38 86 56", // #265638
		"--color-tertiary-800": "31 69 44", // #1f452c
		"--color-tertiary-900": "25 56 36", // #193824
		// success | #1aac7e 
		"--color-success-50": "221 243 236", // #ddf3ec
		"--color-success-100": "209 238 229", // #d1eee5
		"--color-success-200": "198 234 223", // #c6eadf
		"--color-success-300": "163 222 203", // #a3decb
		"--color-success-400": "95 197 165", // #5fc5a5
		"--color-success-500": "26 172 126", // #1aac7e
		"--color-success-600": "23 155 113", // #179b71
		"--color-success-700": "20 129 95", // #14815f
		"--color-success-800": "16 103 76", // #10674c
		"--color-success-900": "13 84 62", // #0d543e
		// warning | #b9a604 
		"--color-warning-50": "245 242 217", // #f5f2d9
		"--color-warning-100": "241 237 205", // #f1edcd
		"--color-warning-200": "238 233 192", // #eee9c0
		"--color-warning-300": "227 219 155", // #e3db9b
		"--color-warning-400": "206 193 79", // #cec14f
		"--color-warning-500": "185 166 4", // #b9a604
		"--color-warning-600": "167 149 4", // #a79504
		"--color-warning-700": "139 125 3", // #8b7d03
		"--color-warning-800": "111 100 2", // #6f6402
		"--color-warning-900": "91 81 2", // #5b5102
		// error | #8e2579 
		"--color-error-50": "238 222 235", // #eedeeb
		"--color-error-100": "232 211 228", // #e8d3e4
		"--color-error-200": "227 201 222", // #e3c9de
		"--color-error-300": "210 168 201", // #d2a8c9
		"--color-error-400": "176 102 161", // #b066a1
		"--color-error-500": "142 37 121", // #8e2579
		"--color-error-600": "128 33 109", // #80216d
		"--color-error-700": "107 28 91", // #6b1c5b
		"--color-error-800": "85 22 73", // #551649
		"--color-error-900": "70 18 59", // #46123b
		// surface | #5e91d8 
		"--color-surface-50": "231 239 249", // #e7eff9
		"--color-surface-100": "223 233 247", // #dfe9f7
		"--color-surface-200": "215 228 245", // #d7e4f5
		"--color-surface-300": "191 211 239", // #bfd3ef
		"--color-surface-400": "142 178 228", // #8eb2e4
		"--color-surface-500": "94 145 216", // #5e91d8
		"--color-surface-600": "85 131 194", // #5583c2
		"--color-surface-700": "71 109 162", // #476da2
		"--color-surface-800": "56 87 130", // #385782
		"--color-surface-900": "46 71 106", // #2e476a
		
	}
}