import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import ts_assert from '../lib/main.ts';
import type {
	Node,
} from 'typescript';
import ts from 'typescript';
import assertables from '../lib/assertables.ts';

const override_throws_test_arg: {[key: string]: Node} = {};

const auto_override_throws = {
	create_identifier: [
		'isStringLiteral',
		'isElementAccessChain',
		'isPropertyAccessChain',
		'isLiteralExpression',
		'isLeftHandSideExpression',
		'isConstructorTypeNode',
	],
	create_function_declaration: [
		'isConciseBody',
		'isExpression',
		'isPropertyName',
		'isForInitializer',
		'isImportAttributeName',
		'isLeftHandSideExpression',
		'isModuleName',
		'isModuleExportName',
	],
};

for (
	const entry of auto_override_throws.create_identifier
) {
	override_throws_test_arg[entry] = ts.factory.createIdentifier('foo');
}

for (
	const entry of auto_override_throws.create_function_declaration
) {
	override_throws_test_arg[entry] = ts.factory.createFunctionDeclaration(
		undefined,
		undefined,
		undefined,
		undefined,
		[],
		undefined,
		undefined,
	);
}

assertables.forEach((declaration, assertables_index) => {
	const name = declaration.name.text;

	if (
		'Node' === declaration.parameters[0].type.typeName.text
		&& name in ts_assert
	) {
		const to_call = ts_assert[
			name as keyof typeof ts_assert
		] as (node: Node) => void;

		// oxlint-disable-next-line typescript/no-unsafe-call
		void describe(name, () => {
			// oxlint-disable-next-line typescript/no-unsafe-call
			void it(`throws from assertables[${assertables_index}]`, () => {
				// oxlint-disable-next-line @stylistic/max-len
				// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
				assert.throws(() => to_call(
					name in override_throws_test_arg
						? override_throws_test_arg[
							name as keyof typeof override_throws_test_arg
						]
						: ts.factory.createStringLiteral('foo'),
				));
			});
		});
	}
});

// oxlint-disable-next-line typescript/no-unsafe-call
void describe('isIdentifier', () => {
	// oxlint-disable-next-line typescript/no-unsafe-call
	void it('throws', () => {
		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.throws(
			() => ts_assert.isIdentifier(
				ts.factory.createStringLiteral('foo'),
			),
			{
				message: /^expected Identifier, received StringLiteral\b/,
			},
		);
	});
});

// oxlint-disable-next-line typescript/no-unsafe-call
void describe('isEmptyBindingPattern', () => {
	// oxlint-disable-next-line typescript/no-unsafe-call
	void it('throws', () => {
		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.throws(() => ts_assert.isEmptyBindingPattern(
			ts.factory.createIdentifier('foo'),
		));
	});
});

// oxlint-disable-next-line typescript/no-unsafe-call
void describe('isBooleanLiteral', () => {
	// oxlint-disable-next-line typescript/no-unsafe-call
	void it('throws', () => {
		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.throws(() => ts_assert.isBooleanLiteral(
			ts.factory.createStringLiteral('foo'),
			true,
		));

		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.throws(() => ts_assert.isBooleanLiteral(
			ts.factory.createFalse(),
			true,
		));

		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.throws(() => ts_assert.isBooleanLiteral(
			ts.factory.createTrue(),
			false,
		));
	});

	// oxlint-disable-next-line typescript/no-unsafe-call
	void it('does not throw', () => {
		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.doesNotThrow(() => ts_assert.isBooleanLiteral(
			ts.factory.createTrue(),
			true,
		));

		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.doesNotThrow(() => ts_assert.isBooleanLiteral(
			ts.factory.createFalse(),
			false,
		));
	});
});

// oxlint-disable-next-line typescript/no-unsafe-call
void describe('isTokenWithExpectedKind', () => {
	// oxlint-disable-next-line typescript/no-unsafe-call
	void it('throws', () => {
		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.throws(() => ts_assert.isTokenWithExpectedKind(
			ts.factory.createStringLiteral('foo'),
			ts.SyntaxKind.StringKeyword,
		));

		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.throws(() => ts_assert.isTokenWithExpectedKind(
			ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
			ts.SyntaxKind.NumberKeyword,
		));
	});

	// oxlint-disable-next-line typescript/no-unsafe-call
	void it('does not throw', () => {
		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.doesNotThrow(() => ts_assert.isTokenWithExpectedKind(
			ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
			ts.SyntaxKind.StringKeyword,
		));
	});
});

// oxlint-disable-next-line typescript/no-unsafe-call
void describe('isExpectedIdentifier', () => {
	// oxlint-disable-next-line typescript/no-unsafe-call
	void it('throws', () => {
		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.throws(
			() => ts_assert.isExpectedIdentifier(
				ts.factory.createStringLiteral('foo'),
				'bar',
			),
			{
				message: /^expected Identifier, received StringLiteral\n/,
			},
		);

		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.throws(
			() => ts_assert.isExpectedIdentifier(
				ts.factory.createIdentifier('foo'),
				'bar',
			),
			{
				message: [
					'Expected values to be strictly equal:',
					'\'foo\' !== \'bar\'\n',
				].join('\n\n'),
			},
		);
	});

	// oxlint-disable-next-line typescript/no-unsafe-call
	void it('does not throw', () => {
		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.doesNotThrow(() => ts_assert.isExpectedIdentifier(
			ts.factory.createIdentifier('foo'),
			'foo',
		));
	});
});

// oxlint-disable-next-line typescript/no-unsafe-call
void describe('isUndefined', () => {
	// oxlint-disable-next-line typescript/no-unsafe-call
	void it('throws', () => {
		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.throws(
			() => ts_assert.isUndefined(
				ts.factory.createStringLiteral('foo'),
			),
			{
				message: /^expected Identifier, received StringLiteral\b/,
			},
		);

		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.throws(
			() => ts_assert.isUndefined(
				ts.factory.createIdentifier('foo'),
			),
			{
				message: [
					'Expected values to be strictly equal:',
					'',
					'\'foo\' !== \'undefined\'',
					'',
				].join('\n'),
			},
		);
	});

	// oxlint-disable-next-line typescript/no-unsafe-call
	void it('does not throw', () => {
		// oxlint-disable-next-line @stylistic/max-len
		// oxlint-disable-next-line typescript/no-unsafe-call, typescript/no-unsafe-member-access
		assert.doesNotThrow(() => ts_assert.isUndefined(
			ts.factory.createIdentifier('undefined'),
		));
	});
});
