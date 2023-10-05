
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #80ecdd 
		"--color-primary-50": "236 252 250", // #ecfcfa
		"--color-primary-100": "230 251 248", // #e6fbf8
		"--color-primary-200": "223 250 247", // #dffaf7
		"--color-primary-300": "204 247 241", // #ccf7f1
		"--color-primary-400": "166 242 231", // #a6f2e7
		"--color-primary-500": "128 236 221", // #80ecdd
		"--color-primary-600": "115 212 199", // #73d4c7
		"--color-primary-700": "96 177 166", // #60b1a6
		"--color-primary-800": "77 142 133", // #4d8e85
		"--color-primary-900": "63 116 108", // #3f746c
		// secondary | #c78a1f 
		"--color-secondary-50": "247 237 221", // #f7eddd
		"--color-secondary-100": "244 232 210", // #f4e8d2
		"--color-secondary-200": "241 226 199", // #f1e2c7
		"--color-secondary-300": "233 208 165", // #e9d0a5
		"--color-secondary-400": "216 173 98", // #d8ad62
		"--color-secondary-500": "199 138 31", // #c78a1f
		"--color-secondary-600": "179 124 28", // #b37c1c
		"--color-secondary-700": "149 104 23", // #956817
		"--color-secondary-800": "119 83 19", // #775313
		"--color-secondary-900": "98 68 15", // #62440f
		// tertiary | #468363 
		"--color-tertiary-50": "227 236 232", // #e3ece8
		"--color-tertiary-100": "218 230 224", // #dae6e0
		"--color-tertiary-200": "209 224 216", // #d1e0d8
		"--color-tertiary-300": "181 205 193", // #b5cdc1
		"--color-tertiary-400": "126 168 146", // #7ea892
		"--color-tertiary-500": "70 131 99", // #468363
		"--color-tertiary-600": "63 118 89", // #3f7659
		"--color-tertiary-700": "53 98 74", // #35624a
		"--color-tertiary-800": "42 79 59", // #2a4f3b
		"--color-tertiary-900": "34 64 49", // #224031
		// success | #c62b09 
		"--color-success-50": "246 223 218", // #f6dfda
		"--color-success-100": "244 213 206", // #f4d5ce
		"--color-success-200": "241 202 194", // #f1cac2
		"--color-success-300": "232 170 157", // #e8aa9d
		"--color-success-400": "215 107 83", // #d76b53
		"--color-success-500": "198 43 9", // #c62b09
		"--color-success-600": "178 39 8", // #b22708
		"--color-success-700": "149 32 7", // #952007
		"--color-success-800": "119 26 5", // #771a05
		"--color-success-900": "97 21 4", // #611504
		// warning | #5fe081 
		"--color-warning-50": "231 250 236", // #e7faec
		"--color-warning-100": "223 249 230", // #dff9e6
		"--color-warning-200": "215 247 224", // #d7f7e0
		"--color-warning-300": "191 243 205", // #bff3cd
		"--color-warning-400": "143 233 167", // #8fe9a7
		"--color-warning-500": "95 224 129", // #5fe081
		"--color-warning-600": "86 202 116", // #56ca74
		"--color-warning-700": "71 168 97", // #47a861
		"--color-warning-800": "57 134 77", // #39864d
		"--color-warning-900": "47 110 63", // #2f6e3f
		// error | #aa8105 
		"--color-error-50": "242 236 218", // #f2ecda
		"--color-error-100": "238 230 205", // #eee6cd
		"--color-error-200": "234 224 193", // #eae0c1
		"--color-error-300": "221 205 155", // #ddcd9b
		"--color-error-400": "196 167 80", // #c4a750
		"--color-error-500": "170 129 5", // #aa8105
		"--color-error-600": "153 116 5", // #997405
		"--color-error-700": "128 97 4", // #806104
		"--color-error-800": "102 77 3", // #664d03
		"--color-error-900": "83 63 2", // #533f02
		// surface | #000e63 
		"--color-surface-50": "217 219 232", // #d9dbe8
		"--color-surface-100": "204 207 224", // #cccfe0
		"--color-surface-200": "191 195 216", // #bfc3d8
		"--color-surface-300": "153 159 193", // #999fc1
		"--color-surface-400": "77 86 146", // #4d5692
		"--color-surface-500": "0 14 99", // #000e63
		"--color-surface-600": "0 13 89", // #000d59
		"--color-surface-700": "0 11 74", // #000b4a
		"--color-surface-800": "0 8 59", // #00083b
		"--color-surface-900": "0 7 49", // #000731
		
	}
}