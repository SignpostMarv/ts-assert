import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import ts_assert from '../lib/main';
import ts, {
	Node,
} from 'typescript';
import assertables from '../lib/assertables';

const override_throws_test_arg:{[key: string]: Node} = {};

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

for (const declaration of assertables) {
	const name = declaration.name.text;
	if (
		'Node' === declaration.parameters[0].type.typeName.text
		&& name in ts_assert
	) {
		const to_call = ts_assert[
			name as keyof typeof ts_assert
		] as (node:Node) => void;
		void describe(name, () => {
			void it('throws', () => {
				assert.throws(() => to_call(
					name in override_throws_test_arg
						? override_throws_test_arg[
							name as keyof typeof override_throws_test_arg
						]
						: ts.factory.createStringLiteral('foo')
				))
			});
		});
	}
}

void describe('isIdentifier', () => {
	void it('throws', () => {
		assert.throws(
			() => ts_assert.isIdentifier(
				ts.factory.createStringLiteral('foo')
			),
			{
				message: 'expected Identifier, received StringLiteral',
			}
		);
	});
});

void describe('isEmptyBindingPattern', () => {
	void it('throws', () => {
		assert.throws(() => ts_assert.isEmptyBindingPattern(
			ts.factory.createIdentifier('foo')
		));
	})
})

void describe('isBooleanLiteral', () => {
	void it ('throws', () => {
		assert.throws(() => ts_assert.isBooleanLiteral(
			ts.factory.createStringLiteral('foo'),
			true
		));
		assert.throws(() => ts_assert.isBooleanLiteral(
			ts.factory.createFalse(),
			true
		));
		assert.throws(() => ts_assert.isBooleanLiteral(
			ts.factory.createTrue(),
			false
		));
	})
	void it('does not throw', () => {
		assert.doesNotThrow(() => ts_assert.isBooleanLiteral(
			ts.factory.createTrue(),
			true
		));
		assert.doesNotThrow(() => ts_assert.isBooleanLiteral(
			ts.factory.createFalse(),
			false
		));
	})
})

void describe('isTokenWithExpectedKind', () => {
	void it('throws', () => {
		assert.throws(() => ts_assert.isTokenWithExpectedKind(
			ts.factory.createStringLiteral('foo'),
			ts.SyntaxKind.StringKeyword
		));
		assert.throws(() => ts_assert.isTokenWithExpectedKind(
			ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
			ts.SyntaxKind.NumberKeyword
		));
	})
	void it('does not throw', () => {
		assert.doesNotThrow(() => ts_assert.isTokenWithExpectedKind(
			ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
			ts.SyntaxKind.StringKeyword
		));
	})
})

void describe('isExpectedIdentifier', () => {
	void it('throws', () => {
		assert.throws(
			() => ts_assert.isExpectedIdentifier(
				ts.factory.createStringLiteral('foo'),
				'bar',
			),
			{
				message: 'expected Identifier, received StringLiteral',
			}
		);
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
			}
		);
	})
	void it('does not throw', () => {
		assert.doesNotThrow(() => ts_assert.isExpectedIdentifier(
			ts.factory.createIdentifier('foo'),
			'foo'
		));
	})
})

void describe('isUndefined', () => {
	void it('throws', () => {

		assert.throws(
			() => ts_assert.isUndefined(
				ts.factory.createStringLiteral('foo')
			),
			{
				message: 'expected Identifier, received StringLiteral',
			}
		);
		assert.throws(
			() => ts_assert.isUndefined(
				ts.factory.createIdentifier('foo')
			),
			{
				message: [
					'Expected values to be strictly equal:',
					'+ actual - expected',
					'',
					'+ \'foo\'',
					'- \'undefined\'',
				].join('\n'),
			}
		);
	})
	void it('does not throw', () => {
		assert.doesNotThrow(() => ts_assert.isUndefined(
			ts.factory.createIdentifier('undefined')
		));
	})
})
