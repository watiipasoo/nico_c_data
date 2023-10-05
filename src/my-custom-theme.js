
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
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #3652d6 
		"--color-primary-50": "225 229 249", // #e1e5f9
		"--color-primary-100": "215 220 247", // #d7dcf7
		"--color-primary-200": "205 212 245", // #cdd4f5
		"--color-primary-300": "175 186 239", // #afbaef
		"--color-primary-400": "114 134 226", // #7286e2
		"--color-primary-500": "54 82 214", // #3652d6
		"--color-primary-600": "49 74 193", // #314ac1
		"--color-primary-700": "41 62 161", // #293ea1
		"--color-primary-800": "32 49 128", // #203180
		"--color-primary-900": "26 40 105", // #1a2869
		// secondary | #cd85f3 
		"--color-secondary-50": "248 237 253", // #f8edfd
		"--color-secondary-100": "245 231 253", // #f5e7fd
		"--color-secondary-200": "243 225 252", // #f3e1fc
		"--color-secondary-300": "235 206 250", // #ebcefa
		"--color-secondary-400": "220 170 247", // #dcaaf7
		"--color-secondary-500": "205 133 243", // #cd85f3
		"--color-secondary-600": "185 120 219", // #b978db
		"--color-secondary-700": "154 100 182", // #9a64b6
		"--color-secondary-800": "123 80 146", // #7b5092
		"--color-secondary-900": "100 65 119", // #644177
		// tertiary | #3c7a1d 
		"--color-tertiary-50": "226 235 221", // #e2ebdd
		"--color-tertiary-100": "216 228 210", // #d8e4d2
		"--color-tertiary-200": "206 222 199", // #cedec7
		"--color-tertiary-300": "177 202 165", // #b1caa5
		"--color-tertiary-400": "119 162 97", // #77a261
		"--color-tertiary-500": "60 122 29", // #3c7a1d
		"--color-tertiary-600": "54 110 26", // #366e1a
		"--color-tertiary-700": "45 92 22", // #2d5c16
		"--color-tertiary-800": "36 73 17", // #244911
		"--color-tertiary-900": "29 60 14", // #1d3c0e
		// success | #efed31 
		"--color-success-50": "253 252 224", // #fdfce0
		"--color-success-100": "252 251 214", // #fcfbd6
		"--color-success-200": "251 251 204", // #fbfbcc
		"--color-success-300": "249 248 173", // #f9f8ad
		"--color-success-400": "244 242 111", // #f4f26f
		"--color-success-500": "239 237 49", // #efed31
		"--color-success-600": "215 213 44", // #d7d52c
		"--color-success-700": "179 178 37", // #b3b225
		"--color-success-800": "143 142 29", // #8f8e1d
		"--color-success-900": "117 116 24", // #757418
		// warning | #a7ec10 
		"--color-warning-50": "242 252 219", // #f2fcdb
		"--color-warning-100": "237 251 207", // #edfbcf
		"--color-warning-200": "233 250 195", // #e9fac3
		"--color-warning-300": "220 247 159", // #dcf79f
		"--color-warning-400": "193 242 88", // #c1f258
		"--color-warning-500": "167 236 16", // #a7ec10
		"--color-warning-600": "150 212 14", // #96d40e
		"--color-warning-700": "125 177 12", // #7db10c
		"--color-warning-800": "100 142 10", // #648e0a
		"--color-warning-900": "82 116 8", // #527408
		// error | #8a1a88 
		"--color-error-50": "237 221 237", // #eddded
		"--color-error-100": "232 209 231", // #e8d1e7
		"--color-error-200": "226 198 225", // #e2c6e1
		"--color-error-300": "208 163 207", // #d0a3cf
		"--color-error-400": "173 95 172", // #ad5fac
		"--color-error-500": "138 26 136", // #8a1a88
		"--color-error-600": "124 23 122", // #7c177a
		"--color-error-700": "104 20 102", // #681466
		"--color-error-800": "83 16 82", // #531052
		"--color-error-900": "68 13 67", // #440d43
		// surface | #260a29 
		"--color-surface-50": "222 218 223", // #dedadf
		"--color-surface-100": "212 206 212", // #d4ced4
		"--color-surface-200": "201 194 202", // #c9c2ca
		"--color-surface-300": "168 157 169", // #a89da9
		"--color-surface-400": "103 84 105", // #675469
		"--color-surface-500": "38 10 41", // #260a29
		"--color-surface-600": "34 9 37", // #220925
		"--color-surface-700": "29 8 31", // #1d081f
		"--color-surface-800": "23 6 25", // #170619
		"--color-surface-900": "19 5 20", // #130514
		
	}
}