module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['import', 'simple-import-sort'],
	extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
	rules: {
		// 🔹 Para que avise si el orden no está bien
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',

		// 🔹 Opcional: que agrupe primero librerías externas, luego locales
		'import/order': [
			'error',
			{
				'groups': [
					'builtin', // node "fs", "path"
					'external', // npm deps "react", "lodash"
					'internal', // aliases "@/components"
					['parent', 'sibling', 'index'], // ../ y ./ imports
					'object', // import log = console;
					'type', // import type {...}
				],
				'newlines-between': 'always',
				'alphabetize': { order: 'asc', caseInsensitive: true },
			},
		],
	},
}
