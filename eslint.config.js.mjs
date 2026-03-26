import {
	javascript as config,
} from '@signpostmarv/eslint-config';

export default [
	...config,
	{
		files: ['**/*.mjs'],
		ignores: ['**/*.js'],
	},
	{
		rules: {
			'@stylistic/type-annotation-spacing': ['error', {
				before: false,
				after: true,
				overrides: {
					arrow: {
						before: true,
						after: true,
					},
				},
			}],
		},
	},
];
