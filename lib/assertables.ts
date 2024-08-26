import {
	readFile,
} from 'fs/promises';
import ts, {
	FunctionDeclaration,
	Identifier,
	ModuleBlock,
	ModuleDeclaration,
	TypeReferenceNode,
} from 'typescript';
import assert from 'node:assert/strict';

const ast = ts.createSourceFile(
	'typescript.d.ts',
	(await readFile(`${import.meta.dirname}/../node_modules/typescript/lib/typescript.d.ts`)).toString(),
	ts.ScriptTarget.Latest,
	false,
	ts.ScriptKind.TS,
).statements.filter((e): e is ModuleDeclaration => ts.isModuleDeclaration(e));

assert.equal(ast.length, 1, 'Could not obtain typescript module AST');

const module_body = ast[0].body;

assert.equal(
	!!module_body && !!ts.isModuleBlock(module_body),
	true,
	'Could not obtain module body!',
);

const {statements} = module_body as ModuleBlock;
type named_function = (
	& FunctionDeclaration
	& {name:Identifier}
);

const functions:named_function[] = statements.filter(
	(e): e is named_function => {
		return ts.isFunctionDeclaration(e) && !!e.name;
	},
);

type assertable_function<
	NodeParam extends string = string
> =
	& named_function
	& {
		name: (
			& Identifier
			& {text: `is${string}`}
		),
		parameters: [
			(
				& {
					name: (
						& Identifier
						& {
							text: NodeParam
						}
					),
					type: (
						& TypeReferenceNode
						& {
							typeName: Identifier,
						}
					),
				}
			)
		],
		type: (
			& {
				parameterName: (
					& Identifier
					& {
						text: NodeParam
					}
				),
				type: (
					& TypeReferenceNode
					& {
						typeName: Identifier,
					}
				),
			}
		)
	};

const skip_these = [
	'isAssertClause',
	'isAssertEntry',
	'isImportTypeAssertionContainer',
	'isUnparsedTextLike',
	'isUnparsedNode',
	'isUnparsedPrepend',
	'isUnparsedSource',
	'isUnparsedTextLike',
];

export const assertables:assertable_function[] = functions.filter(
	(e): e is assertable_function => {
		return (
			e.name.text.startsWith('is')
			&& !skip_these.includes(e.name.text)
			&& 1 === e.parameters.length
			&& !!e.parameters[0].type
			&& ts.isTypeReferenceNode(e.parameters[0].type)
			&& ts.isIdentifier(e.parameters[0].type.typeName)
			&& ts.isIdentifier(e.parameters[0].name)
			&& !!e.type
			&& ts.isTypePredicateNode(e.type)
			&& !!e.type.type
			&& ts.isTypeReferenceNode(e.type.type)
			&& ts.isIdentifier(e.type.type.typeName)
			&& ts.isIdentifier(e.type.parameterName)
			&& e.parameters[0].name.text === e.type.parameterName.text
		);
	},
).sort((a, b) => {
	return a.name.text.localeCompare(b.name.text);
});

export default assertables;
