import generated, {
	isExpression,
} from '../generated/assertions';
import assert from 'node:assert/strict';
import ts, {
	FalseLiteral,
	Node,
	TrueLiteral,
	TypeNode,
} from 'typescript';

export function isBooleanLiteral(
	node:Node,
	type:boolean,
	message?:string|Error
): asserts node is typeof type extends true ? TrueLiteral : FalseLiteral {
	isExpression(node, message);
	assert.equal(
		node.kind,
		type ? ts.SyntaxKind.TrueKeyword : ts.SyntaxKind.FalseKeyword,
		message
	);
}

export function isTokenWithExpectedKind(
	maybe:Node,
	expected_kind: ts.SyntaxKind,
	message?:string|Error
): asserts maybe is TypeNode & {kind: typeof expected_kind} {
	assert.equal(ts.isToken(maybe), true, message);
	assert.equal(ts.isTokenKind(maybe.kind), true, message);
	assert.equal(maybe.kind, expected_kind, message);
}

export default {
	...generated,
	isBooleanLiteral,
	isTokenWithExpectedKind,
};
