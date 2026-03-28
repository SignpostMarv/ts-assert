import {
	writeFile,
} from 'node:fs/promises';
import ts, {
	SyntaxKind,
} from 'typescript';
import * as prettier from 'prettier';

import assertables from './lib/assertables.ts';

const nodes = [
	ts.factory.createImportDeclaration(
		undefined,
		ts.factory.createImportClause(
			SyntaxKind.TypeKeyword,
			undefined,
			ts.factory.createNamedImports(
				[...(new Set([
					'Node',
					...assertables.map((e) => e.type.type.typeName.text),
				])).values()].map(
					(declaration) => ts.factory.createImportSpecifier(
						false,
						undefined,
						ts.factory.createIdentifier(
							declaration,
						),
					),
				).sort((a, b) => a.name.text.localeCompare(b.name.text)),
			),
		),
		ts.factory.createStringLiteral('typescript'),
	),
	ts.factory.createImportDeclaration(
		undefined,
		ts.factory.createImportClause(
			undefined,
			ts.factory.createIdentifier('ts'),
			undefined,
		),
		ts.factory.createStringLiteral('typescript'),
	),
	ts.factory.createImportDeclaration(
		undefined,
		ts.factory.createImportClause(
			undefined,
			ts.factory.createIdentifier('assert'),
			undefined,
		),
		ts.factory.createStringLiteral('node:assert/strict'),
	),
	...(assertables.map(
		(declaration) => {
			const default_message = ts.factory.createTemplateExpression(
				ts.factory.createTemplateHead(
					`expected ${
						declaration.type.type.typeName.text
					}, received `,
				),
				[
					ts.factory.createTemplateSpan(
						ts.factory.createElementAccessExpression(
							ts.factory.createPropertyAccessExpression(
								ts.factory.createIdentifier('ts'),
								'SyntaxKind',
							),
							ts.factory.createPropertyAccessExpression(
								ts.factory.createIdentifier('node'),
								'kind',
							),
						),
						ts.factory.createTemplateTail(''),
					),
				],
			);

			return ts.factory.createFunctionDeclaration(
				[ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
				undefined,
				declaration.name.text,
				undefined,
				[
					ts.factory.createParameterDeclaration(
						undefined,
						undefined,
						'node',
						undefined,
						ts.factory.createTypeReferenceNode(
							declaration.parameters[0].type.typeName.text,
						),
					),
					ts.factory.createParameterDeclaration(
						undefined,
						undefined,
						'message',
						undefined,
						ts.factory.createUnionTypeNode([
							ts.factory.createTypeReferenceNode('string'),
							ts.factory.createTypeReferenceNode('Error'),
						]),
						default_message,
					),
				],
				ts.factory.createTypePredicateNode(
					ts.factory.createToken(ts.SyntaxKind.AssertsKeyword),
					'node',
					declaration.type.type,
				),
				ts.factory.createBlock([ts.factory.createExpressionStatement(
					ts.factory.createCallExpression(
						ts.factory.createPropertyAccessExpression(
							ts.factory.createIdentifier('assert'),
							'equal',
						),
						undefined,
						[
							ts.factory.createCallExpression(
								ts.factory.createPropertyAccessExpression(
									ts.factory.createIdentifier('ts'),
									declaration.name.text,
								),
								undefined,
								[
									ts.factory.createIdentifier('node'),
								],
							),
							ts.factory.createTrue(),
							ts.factory.createIdentifier('message'),
						],
					),
				)]),
			);
		},
	)),
	ts.factory.createExportAssignment(
		[
			ts.factory.createModifier(ts.SyntaxKind.DefaultKeyword),
		],
		undefined,
		ts.factory.createObjectLiteralExpression(assertables.map(
			(declaration) => ts.factory.createShorthandPropertyAssignment(
				declaration.name.text,
			),
		)),
	),
];

const prettier_config = await prettier.resolveConfig(
	`${import.meta.dirname}/.prettierrc`,
);

if (!prettier_config) {
	throw new Error('could not find prettier config');
}
async function format_code(code: string): Promise<string> {
	return `${[
		'// oxlint-disable typescript/no-unsafe-member-access',
		'// oxlint-disable typescript/no-unsafe-call',
		'/* eslint-disable @stylistic/max-len */',
	].join('\n')}${'\n'}${
		(
			await prettier.format(
				code,
				{
					parser: 'typescript',
					config: prettier_config,
				},
			)
		)
			.replace(/ {2}/g, '\t')
			.replace(/(\t+) +/gm, '$1')
			.replace(/"typescript"/g, `'typescript'`)
			.replace(/"node:assert\/strict"/g, `'node:assert/strict'`)
	}`;
}


const printer = ts.createPrinter({
	newLine: ts.NewLineKind.LineFeed,
});

const file_path = `${import.meta.dirname}/generated/assertions.ts`;

const result_file = ts.createSourceFile(
	file_path,
	'',
	ts.ScriptTarget.Latest,
	false,
	ts.ScriptKind.TS,
);

const node_strings = nodes.map((node) => printer.printNode(
	ts.EmitHint.Unspecified,
	node,
	result_file,
));

// oxlint-disable-next-line typescript/no-unsafe-call
await writeFile(
	file_path,
	await format_code(node_strings.join('\n\n')),
);
