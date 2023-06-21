module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:eslint-plugin/recommended',
		'airbnb',
		'plugin:import/recommended',
		'plugin:cypress/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:node/recommended',

		'plugin:react/jsx-runtime',
		'plugin:@next/next/recommended',
	],
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		// Global JS
		indent: 0,
		'@typescript-eslint/indent': ['error', 'tab'],
		'linebreak-style': [
			'error',
			'unix',
		],
		quotes: [
			'error',
			'single',
		],
		semi: [
			'error',
			'never',
		],
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'index',
					['internal', 'external'],
					['sibling', 'parent'],
					'object',
					'type',
				],
			},
		],
		'no-tabs': 0,
		'no-underscore-dangle': 0,
		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
		'max-len': 0,
		'no-restricted-syntax': 0,
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'@typescript-eslint/no-var-requires': 0,
		'import/extensions': 0,
		'import/no-extraneous-dependencies': 0,
		// Node.js
		'node/no-unpublished-import': ['error', {
			allowModules: ['cypress', 'prisma', '@prisma/client', 'tailwindcss'],
		}],
		'node/no-missing-import': 0,
		'node/no-unsupported-features/es-syntax': 0,
		// React / Next.js
		'@next/next/no-html-link-for-pages': 'off',
		'jsx-a11y/anchor-is-valid': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/label-has-associated-control': 0,
		'jsx-a11y/role-supports-aria-props': 0,
		'react/jsx-indent-props': [2, 'tab'],
		'react/prop-types': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/no-unescaped-entities': 0,
		'react/require-default-props': 0,
		'react/no-unused-prop-types': 0,
		'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
		'react/jsx-props-no-spreading': [1, { custom: 'ignore' }],
		'react/function-component-definition': ['error', {
			namedComponents: 'arrow-function',
			unnamedComponents: ['function-expression', 'arrow-function'],
		}],
	},
	overrides: [
		{
			files: ['tests/**/*.js'],
			env: { mocha: true },
		},
	],
}
