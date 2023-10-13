
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
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #5503c1 
		"--color-primary-50": "230 217 246", // #e6d9f6
		"--color-primary-100": "221 205 243", // #ddcdf3
		"--color-primary-200": "213 192 240", // #d5c0f0
		"--color-primary-300": "187 154 230", // #bb9ae6
		"--color-primary-400": "136 79 212", // #884fd4
		"--color-primary-500": "85 3 193", // #5503c1
		"--color-primary-600": "77 3 174", // #4d03ae
		"--color-primary-700": "64 2 145", // #400291
		"--color-primary-800": "51 2 116", // #330274
		"--color-primary-900": "42 1 95", // #2a015f
		// secondary | #a54d0b 
		"--color-secondary-50": "242 228 218", // #f2e4da
		"--color-secondary-100": "237 219 206", // #eddbce
		"--color-secondary-200": "233 211 194", // #e9d3c2
		"--color-secondary-300": "219 184 157", // #dbb89d
		"--color-secondary-400": "192 130 84", // #c08254
		"--color-secondary-500": "165 77 11", // #a54d0b
		"--color-secondary-600": "149 69 10", // #95450a
		"--color-secondary-700": "124 58 8", // #7c3a08
		"--color-secondary-800": "99 46 7", // #632e07
		"--color-secondary-900": "81 38 5", // #512605
		// tertiary | #380beb 
		"--color-tertiary-50": "225 218 252", // #e1dafc
		"--color-tertiary-100": "215 206 251", // #d7cefb
		"--color-tertiary-200": "205 194 250", // #cdc2fa
		"--color-tertiary-300": "175 157 247", // #af9df7
		"--color-tertiary-400": "116 84 241", // #7454f1
		"--color-tertiary-500": "56 11 235", // #380beb
		"--color-tertiary-600": "50 10 212", // #320ad4
		"--color-tertiary-700": "42 8 176", // #2a08b0
		"--color-tertiary-800": "34 7 141", // #22078d
		"--color-tertiary-900": "27 5 115", // #1b0573
		// success | #88d309 
		"--color-success-50": "237 248 218", // #edf8da
		"--color-success-100": "231 246 206", // #e7f6ce
		"--color-success-200": "225 244 194", // #e1f4c2
		"--color-success-300": "207 237 157", // #cfed9d
		"--color-success-400": "172 224 83", // #ace053
		"--color-success-500": "136 211 9", // #88d309
		"--color-success-600": "122 190 8", // #7abe08
		"--color-success-700": "102 158 7", // #669e07
		"--color-success-800": "82 127 5", // #527f05
		"--color-success-900": "67 103 4", // #436704
		// warning | #cc14d8 
		"--color-warning-50": "247 220 249", // #f7dcf9
		"--color-warning-100": "245 208 247", // #f5d0f7
		"--color-warning-200": "242 196 245", // #f2c4f5
		"--color-warning-300": "235 161 239", // #eba1ef
		"--color-warning-400": "219 91 228", // #db5be4
		"--color-warning-500": "204 20 216", // #cc14d8
		"--color-warning-600": "184 18 194", // #b812c2
		"--color-warning-700": "153 15 162", // #990fa2
		"--color-warning-800": "122 12 130", // #7a0c82
		"--color-warning-900": "100 10 106", // #640a6a
		// error | #20ae4e 
		"--color-error-50": "222 243 228", // #def3e4
		"--color-error-100": "210 239 220", // #d2efdc
		"--color-error-200": "199 235 211", // #c7ebd3
		"--color-error-300": "166 223 184", // #a6dfb8
		"--color-error-400": "99 198 131", // #63c683
		"--color-error-500": "32 174 78", // #20ae4e
		"--color-error-600": "29 157 70", // #1d9d46
		"--color-error-700": "24 131 59", // #18833b
		"--color-error-800": "19 104 47", // #13682f
		"--color-error-900": "16 85 38", // #105526
		// surface | #135a6f 
		"--color-surface-50": "220 230 233", // #dce6e9
		"--color-surface-100": "208 222 226", // #d0dee2
		"--color-surface-200": "196 214 219", // #c4d6db
		"--color-surface-300": "161 189 197", // #a1bdc5
		"--color-surface-400": "90 140 154", // #5a8c9a
		"--color-surface-500": "19 90 111", // #135a6f
		"--color-surface-600": "17 81 100", // #115164
		"--color-surface-700": "14 68 83", // #0e4453
		"--color-surface-800": "11 54 67", // #0b3643
		"--color-surface-900": "9 44 54", // #092c36
		
	}
}