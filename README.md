# @signpostmarv/ts-assert

Code-generated assertions for TypeScript type guarding functions.

# Usage

```ts
import {describe, it} from 'node:test';
import ts_assert from '@signpostmarv/ts-assert';
import ts from 'typescript';

void describe('isIdentifier', () => {
	void it('throws', () => {
		assert.throws(() =>
			ts_assert.isIdentifier(ts.factory.createStringLiteral('foo'))
		);
	});
});

void describe('isEmptyBindingPattern', () => {
	void it('throws', () => {
		assert.throws(() =>
			ts_assert.isEmptyBindingPattern(ts.factory.createIdentifier('foo'))
		);
	});
});

void describe('isBooleanLiteral', () => {
	void it('throws', () => {
		assert.throws(() =>
			ts_assert.isBooleanLiteral(
				ts.factory.createStringLiteral('foo'),
				true
			)
		);
		assert.throws(() =>
			ts_assert.isBooleanLiteral(ts.factory.createFalse(), true)
		);
		assert.throws(() =>
			ts_assert.isBooleanLiteral(ts.factory.createTrue(), false)
		);
	});
	void it('does not throw', () => {
		assert.doesNotThrow(() =>
			ts_assert.isBooleanLiteral(ts.factory.createTrue(), true)
		);
		assert.doesNotThrow(() =>
			ts_assert.isBooleanLiteral(ts.factory.createFalse(), false)
		);
	});
});

void describe('isTokenWithExpectedKind', () => {
	void it('throws', () => {
		assert.throws(() =>
			ts_assert.isTokenWithExpectedKind(
				ts.factory.createStringLiteral('foo'),
				ts.SyntaxKind.StringKeyword
			)
		);
		assert.throws(() =>
			ts_assert.isTokenWithExpectedKind(
				ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
				ts.SyntaxKind.NumberKeyword
			)
		);
	});
	void it('does not throw', () => {
		assert.doesNotThrow(() =>
			ts_assert.isTokenWithExpectedKind(
				ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
				ts.SyntaxKind.StringKeyword
			)
		);
	});
});
```
