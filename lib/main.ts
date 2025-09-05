import generated, {
	isExpression,
	isIdentifier,
} from '../generated/assertions.js';
import assert from 'node:assert/strict';
import type {
	FalseLiteral,
	Identifier,
	Node,
	TrueLiteral,
	TypeNode,
} from 'typescript';
import ts from 'typescript';

export function isBooleanLiteral(
	node:Node,
	type:boolean,
	message?:string|Error,
): asserts node is typeof type extends true ? TrueLiteral : FalseLiteral {
	isExpression(node, message);
	assert.equal(
		node.kind,
		type ? ts.SyntaxKind.TrueKeyword : ts.SyntaxKind.FalseKeyword,
		message,
	);
}

export function isTokenWithExpectedKind(
	maybe:Node,
	expected_kind: ts.SyntaxKind,
	message?:string|Error,
): asserts maybe is TypeNode & {kind: typeof expected_kind} {
	assert.equal(ts.isToken(maybe), true, message);
	assert.equal(ts.isTokenKind(maybe.kind), true, message);
	assert.equal(maybe.kind, expected_kind, message);
}

export function isExpectedIdentifier<T = string>(
	maybe:Node,
	expected:T,
	message?:string|Error,
): asserts maybe is Identifier & {escapedText: T} {
	isIdentifier(maybe, message);
	assert.equal(maybe.escapedText, expected, message);
}

export function isUndefined(
	maybe:Node,
	message?:string|Error,
): asserts maybe is Identifier & {escapedText: 'undefined'} {
	isExpectedIdentifier(maybe, 'undefined', message);
}

export default {
	...generated,
	isBooleanLiteral,
	isTokenWithExpectedKind,
	isExpectedIdentifier,
	isUndefined,
};
