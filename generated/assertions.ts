import ts, {
	AccessorDeclaration,
	ArrayBindingElement,
	ArrayBindingPattern,
	ArrayLiteralExpression,
	ArrayTypeNode,
	ArrowFunction,
	AsExpression,
	AssertionExpression,
	AssertsKeyword,
	AsteriskToken,
	AutoAccessorPropertyDeclaration,
	AwaitExpression,
	AwaitKeyword,
	BigIntLiteral,
	BinaryExpression,
	BinaryOperatorToken,
	BindingElement,
	BindingName,
	BindingPattern,
	Block,
	BreakOrContinueStatement,
	BreakStatement,
	Bundle,
	CallChain,
	CallExpression,
	CallLikeExpression,
	CallSignatureDeclaration,
	CaseBlock,
	CaseClause,
	CaseOrDefaultClause,
	CatchClause,
	ClassDeclaration,
	ClassElement,
	ClassExpression,
	ClassLikeDeclaration,
	ClassStaticBlockDeclaration,
	ColonToken,
	CommaListExpression,
	ComputedPropertyName,
	ConciseBody,
	ConditionalExpression,
	ConditionalTypeNode,
	ConstructorDeclaration,
	ConstructorTypeNode,
	ConstructSignatureDeclaration,
	ContinueStatement,
	DebuggerStatement,
	DeclarationStatement,
	Decorator,
	DefaultClause,
	DeleteExpression,
	DoStatement,
	DotDotDotToken,
	ElementAccessChain,
	ElementAccessExpression,
	EmptyStatement,
	EntityName,
	EnumDeclaration,
	EnumMember,
	EqualsGreaterThanToken,
	ExclamationToken,
	ExportAssignment,
	ExportDeclaration,
	ExportSpecifier,
	Expression,
	ExpressionStatement,
	ExpressionWithTypeArguments,
	ExternalModuleReference,
	ForInitializer,
	ForInStatement,
	ForOfStatement,
	ForStatement,
	FunctionDeclaration,
	FunctionExpression,
	FunctionTypeNode,
	GetAccessorDeclaration,
	HeritageClause,
	Identifier,
	IfStatement,
	ImportAttribute,
	ImportAttributeName,
	ImportAttributes,
	ImportClause,
	ImportDeclaration,
	ImportEqualsDeclaration,
	ImportSpecifier,
	ImportTypeNode,
	IndexedAccessTypeNode,
	IndexSignatureDeclaration,
	InferTypeNode,
	InterfaceDeclaration,
	IntersectionTypeNode,
	JSDoc,
	JSDocAllType,
	JSDocAugmentsTag,
	JSDocAuthorTag,
	JSDocCallbackTag,
	JSDocClassTag,
	JSDocDeprecatedTag,
	JSDocEnumTag,
	JSDocFunctionType,
	JSDocImplementsTag,
	JSDocImportTag,
	JSDocLink,
	JSDocLinkCode,
	JSDocLinkPlain,
	JSDocMemberName,
	JSDocNamepathType,
	JSDocNameReference,
	JSDocNonNullableType,
	JSDocNullableType,
	JSDocOptionalType,
	JSDocOverloadTag,
	JSDocOverrideTag,
	JSDocParameterTag,
	JSDocPrivateTag,
	JSDocPropertyLikeTag,
	JSDocPropertyTag,
	JSDocProtectedTag,
	JSDocPublicTag,
	JSDocReadonlyTag,
	JSDocReturnTag,
	JSDocSatisfiesTag,
	JSDocSeeTag,
	JSDocSignature,
	JSDocTemplateTag,
	JSDocThisTag,
	JSDocThrowsTag,
	JSDocTypedefTag,
	JSDocTypeExpression,
	JSDocTypeLiteral,
	JSDocTypeTag,
	JSDocUnknownTag,
	JSDocUnknownType,
	JSDocVariadicType,
	JsxAttribute,
	JsxAttributeLike,
	JsxAttributes,
	JsxCallLike,
	JsxChild,
	JsxClosingElement,
	JsxClosingFragment,
	JsxElement,
	JsxExpression,
	JsxFragment,
	JsxNamespacedName,
	JsxOpeningElement,
	JsxOpeningFragment,
	JsxOpeningLikeElement,
	JsxSelfClosingElement,
	JsxSpreadAttribute,
	JsxTagNameExpression,
	JsxText,
	LabeledStatement,
	LeftHandSideExpression,
	LiteralExpression,
	LiteralTypeNode,
	MappedTypeNode,
	MemberName,
	MetaProperty,
	MethodDeclaration,
	MethodSignature,
	MinusToken,
	MissingDeclaration,
	Modifier,
	ModifierLike,
	ModuleBlock,
	ModuleBody,
	ModuleDeclaration,
	ModuleExportName,
	ModuleName,
	ModuleReference,
	NamedExportBindings,
	NamedExports,
	NamedImportBindings,
	NamedImports,
	NamedTupleMember,
	NamespaceExport,
	NamespaceExportDeclaration,
	NamespaceImport,
	NewExpression,
	Node,
	NonNullChain,
	NonNullExpression,
	NoSubstitutionTemplateLiteral,
	NotEmittedStatement,
	NumericLiteral,
	ObjectBindingPattern,
	ObjectLiteralElement,
	ObjectLiteralElementLike,
	ObjectLiteralExpression,
	OmittedExpression,
	OptionalTypeNode,
	ParameterDeclaration,
	ParenthesizedExpression,
	ParenthesizedTypeNode,
	PartiallyEmittedExpression,
	PlusToken,
	PostfixUnaryExpression,
	PrefixUnaryExpression,
	PrivateIdentifier,
	PropertyAccessChain,
	PropertyAccessExpression,
	PropertyAssignment,
	PropertyDeclaration,
	PropertyName,
	PropertySignature,
	QualifiedName,
	QuestionDotToken,
	QuestionToken,
	RegularExpressionLiteral,
	RestTypeNode,
	ReturnStatement,
	SatisfiesExpression,
	SemicolonClassElement,
	SetAccessorDeclaration,
	ShorthandPropertyAssignment,
	SourceFile,
	SpreadAssignment,
	SpreadElement,
	Statement,
	StringLiteral,
	SwitchStatement,
	SyntheticExpression,
	TaggedTemplateExpression,
	TemplateExpression,
	TemplateHead,
	TemplateLiteral,
	TemplateLiteralToken,
	TemplateLiteralTypeNode,
	TemplateLiteralTypeSpan,
	TemplateMiddle,
	TemplateSpan,
	TemplateTail,
	ThisTypeNode,
	ThrowStatement,
	TryStatement,
	TupleTypeNode,
	TypeAliasDeclaration,
	TypeAssertion,
	TypeElement,
	TypeLiteralNode,
	TypeNode,
	TypeOfExpression,
	TypeOnlyAliasDeclaration,
	TypeOnlyExportDeclaration,
	TypeOnlyImportDeclaration,
	TypeOperatorNode,
	TypeParameterDeclaration,
	TypePredicateNode,
	TypeQueryNode,
	TypeReferenceNode,
	UnionTypeNode,
	VariableDeclaration,
	VariableDeclarationList,
	VariableStatement,
	VoidExpression,
	WhileStatement,
	WithStatement,
	YieldExpression,
} from "typescript";

import assert from "node:assert/strict";

export function isAccessor(
	node: Node,
	message:
		| string
		| Error = `expected AccessorDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is AccessorDeclaration {
	assert.equal(ts.isAccessor(node), true, message);
}

export function isArrayBindingElement(
	node: Node,
	message:
		| string
		| Error = `expected ArrayBindingElement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ArrayBindingElement {
	assert.equal(ts.isArrayBindingElement(node), true, message);
}

export function isArrayBindingPattern(
	node: Node,
	message:
		| string
		| Error = `expected ArrayBindingPattern, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ArrayBindingPattern {
	assert.equal(ts.isArrayBindingPattern(node), true, message);
}

export function isArrayLiteralExpression(
	node: Node,
	message:
		| string
		| Error = `expected ArrayLiteralExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ArrayLiteralExpression {
	assert.equal(ts.isArrayLiteralExpression(node), true, message);
}

export function isArrayTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected ArrayTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ArrayTypeNode {
	assert.equal(ts.isArrayTypeNode(node), true, message);
}

export function isArrowFunction(
	node: Node,
	message:
		| string
		| Error = `expected ArrowFunction, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ArrowFunction {
	assert.equal(ts.isArrowFunction(node), true, message);
}

export function isAsExpression(
	node: Node,
	message:
		| string
		| Error = `expected AsExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is AsExpression {
	assert.equal(ts.isAsExpression(node), true, message);
}

export function isAssertionExpression(
	node: Node,
	message:
		| string
		| Error = `expected AssertionExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is AssertionExpression {
	assert.equal(ts.isAssertionExpression(node), true, message);
}

export function isAssertsKeyword(
	node: Node,
	message:
		| string
		| Error = `expected AssertsKeyword, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is AssertsKeyword {
	assert.equal(ts.isAssertsKeyword(node), true, message);
}

export function isAsteriskToken(
	node: Node,
	message:
		| string
		| Error = `expected AsteriskToken, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is AsteriskToken {
	assert.equal(ts.isAsteriskToken(node), true, message);
}

export function isAutoAccessorPropertyDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected AutoAccessorPropertyDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is AutoAccessorPropertyDeclaration {
	assert.equal(ts.isAutoAccessorPropertyDeclaration(node), true, message);
}

export function isAwaitExpression(
	node: Node,
	message:
		| string
		| Error = `expected AwaitExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is AwaitExpression {
	assert.equal(ts.isAwaitExpression(node), true, message);
}

export function isAwaitKeyword(
	node: Node,
	message:
		| string
		| Error = `expected AwaitKeyword, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is AwaitKeyword {
	assert.equal(ts.isAwaitKeyword(node), true, message);
}

export function isBigIntLiteral(
	node: Node,
	message:
		| string
		| Error = `expected BigIntLiteral, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is BigIntLiteral {
	assert.equal(ts.isBigIntLiteral(node), true, message);
}

export function isBinaryExpression(
	node: Node,
	message:
		| string
		| Error = `expected BinaryExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is BinaryExpression {
	assert.equal(ts.isBinaryExpression(node), true, message);
}

export function isBinaryOperatorToken(
	node: Node,
	message:
		| string
		| Error = `expected BinaryOperatorToken, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is BinaryOperatorToken {
	assert.equal(ts.isBinaryOperatorToken(node), true, message);
}

export function isBindingElement(
	node: Node,
	message:
		| string
		| Error = `expected BindingElement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is BindingElement {
	assert.equal(ts.isBindingElement(node), true, message);
}

export function isBindingName(
	node: Node,
	message:
		| string
		| Error = `expected BindingName, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is BindingName {
	assert.equal(ts.isBindingName(node), true, message);
}

export function isBlock(
	node: Node,
	message:
		| string
		| Error = `expected Block, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is Block {
	assert.equal(ts.isBlock(node), true, message);
}

export function isBreakOrContinueStatement(
	node: Node,
	message:
		| string
		| Error = `expected BreakOrContinueStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is BreakOrContinueStatement {
	assert.equal(ts.isBreakOrContinueStatement(node), true, message);
}

export function isBreakStatement(
	node: Node,
	message:
		| string
		| Error = `expected BreakStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is BreakStatement {
	assert.equal(ts.isBreakStatement(node), true, message);
}

export function isBundle(
	node: Node,
	message:
		| string
		| Error = `expected Bundle, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is Bundle {
	assert.equal(ts.isBundle(node), true, message);
}

export function isCallChain(
	node: Node,
	message:
		| string
		| Error = `expected CallChain, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is CallChain {
	assert.equal(ts.isCallChain(node), true, message);
}

export function isCallExpression(
	node: Node,
	message:
		| string
		| Error = `expected CallExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is CallExpression {
	assert.equal(ts.isCallExpression(node), true, message);
}

export function isCallLikeExpression(
	node: Node,
	message:
		| string
		| Error = `expected CallLikeExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is CallLikeExpression {
	assert.equal(ts.isCallLikeExpression(node), true, message);
}

export function isCallSignatureDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected CallSignatureDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is CallSignatureDeclaration {
	assert.equal(ts.isCallSignatureDeclaration(node), true, message);
}

export function isCaseBlock(
	node: Node,
	message:
		| string
		| Error = `expected CaseBlock, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is CaseBlock {
	assert.equal(ts.isCaseBlock(node), true, message);
}

export function isCaseClause(
	node: Node,
	message:
		| string
		| Error = `expected CaseClause, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is CaseClause {
	assert.equal(ts.isCaseClause(node), true, message);
}

export function isCaseOrDefaultClause(
	node: Node,
	message:
		| string
		| Error = `expected CaseOrDefaultClause, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is CaseOrDefaultClause {
	assert.equal(ts.isCaseOrDefaultClause(node), true, message);
}

export function isCatchClause(
	node: Node,
	message:
		| string
		| Error = `expected CatchClause, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is CatchClause {
	assert.equal(ts.isCatchClause(node), true, message);
}

export function isClassDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected ClassDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ClassDeclaration {
	assert.equal(ts.isClassDeclaration(node), true, message);
}

export function isClassElement(
	node: Node,
	message:
		| string
		| Error = `expected ClassElement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ClassElement {
	assert.equal(ts.isClassElement(node), true, message);
}

export function isClassExpression(
	node: Node,
	message:
		| string
		| Error = `expected ClassExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ClassExpression {
	assert.equal(ts.isClassExpression(node), true, message);
}

export function isClassLike(
	node: Node,
	message:
		| string
		| Error = `expected ClassLikeDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ClassLikeDeclaration {
	assert.equal(ts.isClassLike(node), true, message);
}

export function isClassStaticBlockDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected ClassStaticBlockDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ClassStaticBlockDeclaration {
	assert.equal(ts.isClassStaticBlockDeclaration(node), true, message);
}

export function isColonToken(
	node: Node,
	message:
		| string
		| Error = `expected ColonToken, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ColonToken {
	assert.equal(ts.isColonToken(node), true, message);
}

export function isCommaListExpression(
	node: Node,
	message:
		| string
		| Error = `expected CommaListExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is CommaListExpression {
	assert.equal(ts.isCommaListExpression(node), true, message);
}

export function isComputedPropertyName(
	node: Node,
	message:
		| string
		| Error = `expected ComputedPropertyName, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ComputedPropertyName {
	assert.equal(ts.isComputedPropertyName(node), true, message);
}

export function isConciseBody(
	node: Node,
	message:
		| string
		| Error = `expected ConciseBody, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ConciseBody {
	assert.equal(ts.isConciseBody(node), true, message);
}

export function isConditionalExpression(
	node: Node,
	message:
		| string
		| Error = `expected ConditionalExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ConditionalExpression {
	assert.equal(ts.isConditionalExpression(node), true, message);
}

export function isConditionalTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected ConditionalTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ConditionalTypeNode {
	assert.equal(ts.isConditionalTypeNode(node), true, message);
}

export function isConstructorDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected ConstructorDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ConstructorDeclaration {
	assert.equal(ts.isConstructorDeclaration(node), true, message);
}

export function isConstructorTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected ConstructorTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ConstructorTypeNode {
	assert.equal(ts.isConstructorTypeNode(node), true, message);
}

export function isConstructSignatureDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected ConstructSignatureDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ConstructSignatureDeclaration {
	assert.equal(ts.isConstructSignatureDeclaration(node), true, message);
}

export function isContinueStatement(
	node: Node,
	message:
		| string
		| Error = `expected ContinueStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ContinueStatement {
	assert.equal(ts.isContinueStatement(node), true, message);
}

export function isDebuggerStatement(
	node: Node,
	message:
		| string
		| Error = `expected DebuggerStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is DebuggerStatement {
	assert.equal(ts.isDebuggerStatement(node), true, message);
}

export function isDeclarationStatement(
	node: Node,
	message:
		| string
		| Error = `expected DeclarationStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is DeclarationStatement {
	assert.equal(ts.isDeclarationStatement(node), true, message);
}

export function isDecorator(
	node: Node,
	message:
		| string
		| Error = `expected Decorator, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is Decorator {
	assert.equal(ts.isDecorator(node), true, message);
}

export function isDefaultClause(
	node: Node,
	message:
		| string
		| Error = `expected DefaultClause, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is DefaultClause {
	assert.equal(ts.isDefaultClause(node), true, message);
}

export function isDeleteExpression(
	node: Node,
	message:
		| string
		| Error = `expected DeleteExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is DeleteExpression {
	assert.equal(ts.isDeleteExpression(node), true, message);
}

export function isDoStatement(
	node: Node,
	message:
		| string
		| Error = `expected DoStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is DoStatement {
	assert.equal(ts.isDoStatement(node), true, message);
}

export function isDotDotDotToken(
	node: Node,
	message:
		| string
		| Error = `expected DotDotDotToken, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is DotDotDotToken {
	assert.equal(ts.isDotDotDotToken(node), true, message);
}

export function isElementAccessChain(
	node: Node,
	message:
		| string
		| Error = `expected ElementAccessChain, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ElementAccessChain {
	assert.equal(ts.isElementAccessChain(node), true, message);
}

export function isElementAccessExpression(
	node: Node,
	message:
		| string
		| Error = `expected ElementAccessExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ElementAccessExpression {
	assert.equal(ts.isElementAccessExpression(node), true, message);
}

export function isEmptyBindingPattern(
	node: BindingName,
	message:
		| string
		| Error = `expected BindingPattern, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is BindingPattern {
	assert.equal(ts.isEmptyBindingPattern(node), true, message);
}

export function isEmptyStatement(
	node: Node,
	message:
		| string
		| Error = `expected EmptyStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is EmptyStatement {
	assert.equal(ts.isEmptyStatement(node), true, message);
}

export function isEntityName(
	node: Node,
	message:
		| string
		| Error = `expected EntityName, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is EntityName {
	assert.equal(ts.isEntityName(node), true, message);
}

export function isEnumDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected EnumDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is EnumDeclaration {
	assert.equal(ts.isEnumDeclaration(node), true, message);
}

export function isEnumMember(
	node: Node,
	message:
		| string
		| Error = `expected EnumMember, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is EnumMember {
	assert.equal(ts.isEnumMember(node), true, message);
}

export function isEqualsGreaterThanToken(
	node: Node,
	message:
		| string
		| Error = `expected EqualsGreaterThanToken, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is EqualsGreaterThanToken {
	assert.equal(ts.isEqualsGreaterThanToken(node), true, message);
}

export function isExclamationToken(
	node: Node,
	message:
		| string
		| Error = `expected ExclamationToken, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ExclamationToken {
	assert.equal(ts.isExclamationToken(node), true, message);
}

export function isExportAssignment(
	node: Node,
	message:
		| string
		| Error = `expected ExportAssignment, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ExportAssignment {
	assert.equal(ts.isExportAssignment(node), true, message);
}

export function isExportDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected ExportDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ExportDeclaration {
	assert.equal(ts.isExportDeclaration(node), true, message);
}

export function isExportSpecifier(
	node: Node,
	message:
		| string
		| Error = `expected ExportSpecifier, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ExportSpecifier {
	assert.equal(ts.isExportSpecifier(node), true, message);
}

export function isExpression(
	node: Node,
	message:
		| string
		| Error = `expected Expression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is Expression {
	assert.equal(ts.isExpression(node), true, message);
}

export function isExpressionStatement(
	node: Node,
	message:
		| string
		| Error = `expected ExpressionStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ExpressionStatement {
	assert.equal(ts.isExpressionStatement(node), true, message);
}

export function isExpressionWithTypeArguments(
	node: Node,
	message:
		| string
		| Error = `expected ExpressionWithTypeArguments, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ExpressionWithTypeArguments {
	assert.equal(ts.isExpressionWithTypeArguments(node), true, message);
}

export function isExternalModuleReference(
	node: Node,
	message:
		| string
		| Error = `expected ExternalModuleReference, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ExternalModuleReference {
	assert.equal(ts.isExternalModuleReference(node), true, message);
}

export function isForInitializer(
	node: Node,
	message:
		| string
		| Error = `expected ForInitializer, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ForInitializer {
	assert.equal(ts.isForInitializer(node), true, message);
}

export function isForInStatement(
	node: Node,
	message:
		| string
		| Error = `expected ForInStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ForInStatement {
	assert.equal(ts.isForInStatement(node), true, message);
}

export function isForOfStatement(
	node: Node,
	message:
		| string
		| Error = `expected ForOfStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ForOfStatement {
	assert.equal(ts.isForOfStatement(node), true, message);
}

export function isForStatement(
	node: Node,
	message:
		| string
		| Error = `expected ForStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ForStatement {
	assert.equal(ts.isForStatement(node), true, message);
}

export function isFunctionDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected FunctionDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is FunctionDeclaration {
	assert.equal(ts.isFunctionDeclaration(node), true, message);
}

export function isFunctionExpression(
	node: Node,
	message:
		| string
		| Error = `expected FunctionExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is FunctionExpression {
	assert.equal(ts.isFunctionExpression(node), true, message);
}

export function isFunctionTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected FunctionTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is FunctionTypeNode {
	assert.equal(ts.isFunctionTypeNode(node), true, message);
}

export function isGetAccessor(
	node: Node,
	message:
		| string
		| Error = `expected GetAccessorDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is GetAccessorDeclaration {
	assert.equal(ts.isGetAccessor(node), true, message);
}

export function isGetAccessorDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected GetAccessorDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is GetAccessorDeclaration {
	assert.equal(ts.isGetAccessorDeclaration(node), true, message);
}

export function isHeritageClause(
	node: Node,
	message:
		| string
		| Error = `expected HeritageClause, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is HeritageClause {
	assert.equal(ts.isHeritageClause(node), true, message);
}

export function isIdentifier(
	node: Node,
	message:
		| string
		| Error = `expected Identifier, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is Identifier {
	assert.equal(ts.isIdentifier(node), true, message);
}

export function isIfStatement(
	node: Node,
	message:
		| string
		| Error = `expected IfStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is IfStatement {
	assert.equal(ts.isIfStatement(node), true, message);
}

export function isImportAttribute(
	node: Node,
	message:
		| string
		| Error = `expected ImportAttribute, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ImportAttribute {
	assert.equal(ts.isImportAttribute(node), true, message);
}

export function isImportAttributeName(
	node: Node,
	message:
		| string
		| Error = `expected ImportAttributeName, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ImportAttributeName {
	assert.equal(ts.isImportAttributeName(node), true, message);
}

export function isImportAttributes(
	node: Node,
	message:
		| string
		| Error = `expected ImportAttributes, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ImportAttributes {
	assert.equal(ts.isImportAttributes(node), true, message);
}

export function isImportClause(
	node: Node,
	message:
		| string
		| Error = `expected ImportClause, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ImportClause {
	assert.equal(ts.isImportClause(node), true, message);
}

export function isImportDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected ImportDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ImportDeclaration {
	assert.equal(ts.isImportDeclaration(node), true, message);
}

export function isImportEqualsDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected ImportEqualsDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ImportEqualsDeclaration {
	assert.equal(ts.isImportEqualsDeclaration(node), true, message);
}

export function isImportSpecifier(
	node: Node,
	message:
		| string
		| Error = `expected ImportSpecifier, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ImportSpecifier {
	assert.equal(ts.isImportSpecifier(node), true, message);
}

export function isImportTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected ImportTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ImportTypeNode {
	assert.equal(ts.isImportTypeNode(node), true, message);
}

export function isIndexedAccessTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected IndexedAccessTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is IndexedAccessTypeNode {
	assert.equal(ts.isIndexedAccessTypeNode(node), true, message);
}

export function isIndexSignatureDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected IndexSignatureDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is IndexSignatureDeclaration {
	assert.equal(ts.isIndexSignatureDeclaration(node), true, message);
}

export function isInferTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected InferTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is InferTypeNode {
	assert.equal(ts.isInferTypeNode(node), true, message);
}

export function isInterfaceDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected InterfaceDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is InterfaceDeclaration {
	assert.equal(ts.isInterfaceDeclaration(node), true, message);
}

export function isIntersectionTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected IntersectionTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is IntersectionTypeNode {
	assert.equal(ts.isIntersectionTypeNode(node), true, message);
}

export function isJSDoc(
	node: Node,
	message:
		| string
		| Error = `expected JSDoc, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDoc {
	assert.equal(ts.isJSDoc(node), true, message);
}

export function isJSDocAllType(
	node: Node,
	message:
		| string
		| Error = `expected JSDocAllType, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocAllType {
	assert.equal(ts.isJSDocAllType(node), true, message);
}

export function isJSDocAugmentsTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocAugmentsTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocAugmentsTag {
	assert.equal(ts.isJSDocAugmentsTag(node), true, message);
}

export function isJSDocAuthorTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocAuthorTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocAuthorTag {
	assert.equal(ts.isJSDocAuthorTag(node), true, message);
}

export function isJSDocCallbackTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocCallbackTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocCallbackTag {
	assert.equal(ts.isJSDocCallbackTag(node), true, message);
}

export function isJSDocClassTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocClassTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocClassTag {
	assert.equal(ts.isJSDocClassTag(node), true, message);
}

export function isJSDocDeprecatedTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocDeprecatedTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocDeprecatedTag {
	assert.equal(ts.isJSDocDeprecatedTag(node), true, message);
}

export function isJSDocEnumTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocEnumTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocEnumTag {
	assert.equal(ts.isJSDocEnumTag(node), true, message);
}

export function isJSDocFunctionType(
	node: Node,
	message:
		| string
		| Error = `expected JSDocFunctionType, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocFunctionType {
	assert.equal(ts.isJSDocFunctionType(node), true, message);
}

export function isJSDocImplementsTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocImplementsTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocImplementsTag {
	assert.equal(ts.isJSDocImplementsTag(node), true, message);
}

export function isJSDocImportTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocImportTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocImportTag {
	assert.equal(ts.isJSDocImportTag(node), true, message);
}

export function isJSDocLink(
	node: Node,
	message:
		| string
		| Error = `expected JSDocLink, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocLink {
	assert.equal(ts.isJSDocLink(node), true, message);
}

export function isJSDocLinkCode(
	node: Node,
	message:
		| string
		| Error = `expected JSDocLinkCode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocLinkCode {
	assert.equal(ts.isJSDocLinkCode(node), true, message);
}

export function isJSDocLinkPlain(
	node: Node,
	message:
		| string
		| Error = `expected JSDocLinkPlain, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocLinkPlain {
	assert.equal(ts.isJSDocLinkPlain(node), true, message);
}

export function isJSDocMemberName(
	node: Node,
	message:
		| string
		| Error = `expected JSDocMemberName, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocMemberName {
	assert.equal(ts.isJSDocMemberName(node), true, message);
}

export function isJSDocNamepathType(
	node: Node,
	message:
		| string
		| Error = `expected JSDocNamepathType, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocNamepathType {
	assert.equal(ts.isJSDocNamepathType(node), true, message);
}

export function isJSDocNameReference(
	node: Node,
	message:
		| string
		| Error = `expected JSDocNameReference, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocNameReference {
	assert.equal(ts.isJSDocNameReference(node), true, message);
}

export function isJSDocNonNullableType(
	node: Node,
	message:
		| string
		| Error = `expected JSDocNonNullableType, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocNonNullableType {
	assert.equal(ts.isJSDocNonNullableType(node), true, message);
}

export function isJSDocNullableType(
	node: Node,
	message:
		| string
		| Error = `expected JSDocNullableType, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocNullableType {
	assert.equal(ts.isJSDocNullableType(node), true, message);
}

export function isJSDocOptionalType(
	node: Node,
	message:
		| string
		| Error = `expected JSDocOptionalType, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocOptionalType {
	assert.equal(ts.isJSDocOptionalType(node), true, message);
}

export function isJSDocOverloadTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocOverloadTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocOverloadTag {
	assert.equal(ts.isJSDocOverloadTag(node), true, message);
}

export function isJSDocOverrideTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocOverrideTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocOverrideTag {
	assert.equal(ts.isJSDocOverrideTag(node), true, message);
}

export function isJSDocParameterTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocParameterTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocParameterTag {
	assert.equal(ts.isJSDocParameterTag(node), true, message);
}

export function isJSDocPrivateTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocPrivateTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocPrivateTag {
	assert.equal(ts.isJSDocPrivateTag(node), true, message);
}

export function isJSDocPropertyLikeTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocPropertyLikeTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocPropertyLikeTag {
	assert.equal(ts.isJSDocPropertyLikeTag(node), true, message);
}

export function isJSDocPropertyTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocPropertyTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocPropertyTag {
	assert.equal(ts.isJSDocPropertyTag(node), true, message);
}

export function isJSDocProtectedTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocProtectedTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocProtectedTag {
	assert.equal(ts.isJSDocProtectedTag(node), true, message);
}

export function isJSDocPublicTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocPublicTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocPublicTag {
	assert.equal(ts.isJSDocPublicTag(node), true, message);
}

export function isJSDocReadonlyTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocReadonlyTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocReadonlyTag {
	assert.equal(ts.isJSDocReadonlyTag(node), true, message);
}

export function isJSDocReturnTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocReturnTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocReturnTag {
	assert.equal(ts.isJSDocReturnTag(node), true, message);
}

export function isJSDocSatisfiesTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocSatisfiesTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocSatisfiesTag {
	assert.equal(ts.isJSDocSatisfiesTag(node), true, message);
}

export function isJSDocSeeTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocSeeTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocSeeTag {
	assert.equal(ts.isJSDocSeeTag(node), true, message);
}

export function isJSDocSignature(
	node: Node,
	message:
		| string
		| Error = `expected JSDocSignature, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocSignature {
	assert.equal(ts.isJSDocSignature(node), true, message);
}

export function isJSDocTemplateTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocTemplateTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocTemplateTag {
	assert.equal(ts.isJSDocTemplateTag(node), true, message);
}

export function isJSDocThisTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocThisTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocThisTag {
	assert.equal(ts.isJSDocThisTag(node), true, message);
}

export function isJSDocThrowsTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocThrowsTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocThrowsTag {
	assert.equal(ts.isJSDocThrowsTag(node), true, message);
}

export function isJSDocTypedefTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocTypedefTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocTypedefTag {
	assert.equal(ts.isJSDocTypedefTag(node), true, message);
}

export function isJSDocTypeExpression(
	node: Node,
	message:
		| string
		| Error = `expected JSDocTypeExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocTypeExpression {
	assert.equal(ts.isJSDocTypeExpression(node), true, message);
}

export function isJSDocTypeLiteral(
	node: Node,
	message:
		| string
		| Error = `expected JSDocTypeLiteral, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocTypeLiteral {
	assert.equal(ts.isJSDocTypeLiteral(node), true, message);
}

export function isJSDocTypeTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocTypeTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocTypeTag {
	assert.equal(ts.isJSDocTypeTag(node), true, message);
}

export function isJSDocUnknownTag(
	node: Node,
	message:
		| string
		| Error = `expected JSDocUnknownTag, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocUnknownTag {
	assert.equal(ts.isJSDocUnknownTag(node), true, message);
}

export function isJSDocUnknownType(
	node: Node,
	message:
		| string
		| Error = `expected JSDocUnknownType, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocUnknownType {
	assert.equal(ts.isJSDocUnknownType(node), true, message);
}

export function isJSDocVariadicType(
	node: Node,
	message:
		| string
		| Error = `expected JSDocVariadicType, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JSDocVariadicType {
	assert.equal(ts.isJSDocVariadicType(node), true, message);
}

export function isJsxAttribute(
	node: Node,
	message:
		| string
		| Error = `expected JsxAttribute, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxAttribute {
	assert.equal(ts.isJsxAttribute(node), true, message);
}

export function isJsxAttributeLike(
	node: Node,
	message:
		| string
		| Error = `expected JsxAttributeLike, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxAttributeLike {
	assert.equal(ts.isJsxAttributeLike(node), true, message);
}

export function isJsxAttributes(
	node: Node,
	message:
		| string
		| Error = `expected JsxAttributes, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxAttributes {
	assert.equal(ts.isJsxAttributes(node), true, message);
}

export function isJsxCallLike(
	node: Node,
	message:
		| string
		| Error = `expected JsxCallLike, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxCallLike {
	assert.equal(ts.isJsxCallLike(node), true, message);
}

export function isJsxChild(
	node: Node,
	message:
		| string
		| Error = `expected JsxChild, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxChild {
	assert.equal(ts.isJsxChild(node), true, message);
}

export function isJsxClosingElement(
	node: Node,
	message:
		| string
		| Error = `expected JsxClosingElement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxClosingElement {
	assert.equal(ts.isJsxClosingElement(node), true, message);
}

export function isJsxClosingFragment(
	node: Node,
	message:
		| string
		| Error = `expected JsxClosingFragment, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxClosingFragment {
	assert.equal(ts.isJsxClosingFragment(node), true, message);
}

export function isJsxElement(
	node: Node,
	message:
		| string
		| Error = `expected JsxElement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxElement {
	assert.equal(ts.isJsxElement(node), true, message);
}

export function isJsxExpression(
	node: Node,
	message:
		| string
		| Error = `expected JsxExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxExpression {
	assert.equal(ts.isJsxExpression(node), true, message);
}

export function isJsxFragment(
	node: Node,
	message:
		| string
		| Error = `expected JsxFragment, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxFragment {
	assert.equal(ts.isJsxFragment(node), true, message);
}

export function isJsxNamespacedName(
	node: Node,
	message:
		| string
		| Error = `expected JsxNamespacedName, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxNamespacedName {
	assert.equal(ts.isJsxNamespacedName(node), true, message);
}

export function isJsxOpeningElement(
	node: Node,
	message:
		| string
		| Error = `expected JsxOpeningElement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxOpeningElement {
	assert.equal(ts.isJsxOpeningElement(node), true, message);
}

export function isJsxOpeningFragment(
	node: Node,
	message:
		| string
		| Error = `expected JsxOpeningFragment, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxOpeningFragment {
	assert.equal(ts.isJsxOpeningFragment(node), true, message);
}

export function isJsxOpeningLikeElement(
	node: Node,
	message:
		| string
		| Error = `expected JsxOpeningLikeElement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxOpeningLikeElement {
	assert.equal(ts.isJsxOpeningLikeElement(node), true, message);
}

export function isJsxSelfClosingElement(
	node: Node,
	message:
		| string
		| Error = `expected JsxSelfClosingElement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxSelfClosingElement {
	assert.equal(ts.isJsxSelfClosingElement(node), true, message);
}

export function isJsxSpreadAttribute(
	node: Node,
	message:
		| string
		| Error = `expected JsxSpreadAttribute, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxSpreadAttribute {
	assert.equal(ts.isJsxSpreadAttribute(node), true, message);
}

export function isJsxTagNameExpression(
	node: Node,
	message:
		| string
		| Error = `expected JsxTagNameExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxTagNameExpression {
	assert.equal(ts.isJsxTagNameExpression(node), true, message);
}

export function isJsxText(
	node: Node,
	message:
		| string
		| Error = `expected JsxText, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is JsxText {
	assert.equal(ts.isJsxText(node), true, message);
}

export function isLabeledStatement(
	node: Node,
	message:
		| string
		| Error = `expected LabeledStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is LabeledStatement {
	assert.equal(ts.isLabeledStatement(node), true, message);
}

export function isLeftHandSideExpression(
	node: Node,
	message:
		| string
		| Error = `expected LeftHandSideExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is LeftHandSideExpression {
	assert.equal(ts.isLeftHandSideExpression(node), true, message);
}

export function isLiteralExpression(
	node: Node,
	message:
		| string
		| Error = `expected LiteralExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is LiteralExpression {
	assert.equal(ts.isLiteralExpression(node), true, message);
}

export function isLiteralTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected LiteralTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is LiteralTypeNode {
	assert.equal(ts.isLiteralTypeNode(node), true, message);
}

export function isMappedTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected MappedTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is MappedTypeNode {
	assert.equal(ts.isMappedTypeNode(node), true, message);
}

export function isMemberName(
	node: Node,
	message:
		| string
		| Error = `expected MemberName, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is MemberName {
	assert.equal(ts.isMemberName(node), true, message);
}

export function isMetaProperty(
	node: Node,
	message:
		| string
		| Error = `expected MetaProperty, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is MetaProperty {
	assert.equal(ts.isMetaProperty(node), true, message);
}

export function isMethodDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected MethodDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is MethodDeclaration {
	assert.equal(ts.isMethodDeclaration(node), true, message);
}

export function isMethodSignature(
	node: Node,
	message:
		| string
		| Error = `expected MethodSignature, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is MethodSignature {
	assert.equal(ts.isMethodSignature(node), true, message);
}

export function isMinusToken(
	node: Node,
	message:
		| string
		| Error = `expected MinusToken, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is MinusToken {
	assert.equal(ts.isMinusToken(node), true, message);
}

export function isMissingDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected MissingDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is MissingDeclaration {
	assert.equal(ts.isMissingDeclaration(node), true, message);
}

export function isModifier(
	node: Node,
	message:
		| string
		| Error = `expected Modifier, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is Modifier {
	assert.equal(ts.isModifier(node), true, message);
}

export function isModifierLike(
	node: Node,
	message:
		| string
		| Error = `expected ModifierLike, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ModifierLike {
	assert.equal(ts.isModifierLike(node), true, message);
}

export function isModuleBlock(
	node: Node,
	message:
		| string
		| Error = `expected ModuleBlock, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ModuleBlock {
	assert.equal(ts.isModuleBlock(node), true, message);
}

export function isModuleBody(
	node: Node,
	message:
		| string
		| Error = `expected ModuleBody, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ModuleBody {
	assert.equal(ts.isModuleBody(node), true, message);
}

export function isModuleDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected ModuleDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ModuleDeclaration {
	assert.equal(ts.isModuleDeclaration(node), true, message);
}

export function isModuleExportName(
	node: Node,
	message:
		| string
		| Error = `expected ModuleExportName, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ModuleExportName {
	assert.equal(ts.isModuleExportName(node), true, message);
}

export function isModuleName(
	node: Node,
	message:
		| string
		| Error = `expected ModuleName, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ModuleName {
	assert.equal(ts.isModuleName(node), true, message);
}

export function isModuleReference(
	node: Node,
	message:
		| string
		| Error = `expected ModuleReference, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ModuleReference {
	assert.equal(ts.isModuleReference(node), true, message);
}

export function isNamedExportBindings(
	node: Node,
	message:
		| string
		| Error = `expected NamedExportBindings, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NamedExportBindings {
	assert.equal(ts.isNamedExportBindings(node), true, message);
}

export function isNamedExports(
	node: Node,
	message:
		| string
		| Error = `expected NamedExports, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NamedExports {
	assert.equal(ts.isNamedExports(node), true, message);
}

export function isNamedImportBindings(
	node: Node,
	message:
		| string
		| Error = `expected NamedImportBindings, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NamedImportBindings {
	assert.equal(ts.isNamedImportBindings(node), true, message);
}

export function isNamedImports(
	node: Node,
	message:
		| string
		| Error = `expected NamedImports, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NamedImports {
	assert.equal(ts.isNamedImports(node), true, message);
}

export function isNamedTupleMember(
	node: Node,
	message:
		| string
		| Error = `expected NamedTupleMember, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NamedTupleMember {
	assert.equal(ts.isNamedTupleMember(node), true, message);
}

export function isNamespaceExport(
	node: Node,
	message:
		| string
		| Error = `expected NamespaceExport, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NamespaceExport {
	assert.equal(ts.isNamespaceExport(node), true, message);
}

export function isNamespaceExportDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected NamespaceExportDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NamespaceExportDeclaration {
	assert.equal(ts.isNamespaceExportDeclaration(node), true, message);
}

export function isNamespaceImport(
	node: Node,
	message:
		| string
		| Error = `expected NamespaceImport, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NamespaceImport {
	assert.equal(ts.isNamespaceImport(node), true, message);
}

export function isNewExpression(
	node: Node,
	message:
		| string
		| Error = `expected NewExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NewExpression {
	assert.equal(ts.isNewExpression(node), true, message);
}

export function isNonNullChain(
	node: Node,
	message:
		| string
		| Error = `expected NonNullChain, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NonNullChain {
	assert.equal(ts.isNonNullChain(node), true, message);
}

export function isNonNullExpression(
	node: Node,
	message:
		| string
		| Error = `expected NonNullExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NonNullExpression {
	assert.equal(ts.isNonNullExpression(node), true, message);
}

export function isNoSubstitutionTemplateLiteral(
	node: Node,
	message:
		| string
		| Error = `expected NoSubstitutionTemplateLiteral, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NoSubstitutionTemplateLiteral {
	assert.equal(ts.isNoSubstitutionTemplateLiteral(node), true, message);
}

export function isNotEmittedStatement(
	node: Node,
	message:
		| string
		| Error = `expected NotEmittedStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NotEmittedStatement {
	assert.equal(ts.isNotEmittedStatement(node), true, message);
}

export function isNumericLiteral(
	node: Node,
	message:
		| string
		| Error = `expected NumericLiteral, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is NumericLiteral {
	assert.equal(ts.isNumericLiteral(node), true, message);
}

export function isObjectBindingPattern(
	node: Node,
	message:
		| string
		| Error = `expected ObjectBindingPattern, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ObjectBindingPattern {
	assert.equal(ts.isObjectBindingPattern(node), true, message);
}

export function isObjectLiteralElement(
	node: Node,
	message:
		| string
		| Error = `expected ObjectLiteralElement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ObjectLiteralElement {
	assert.equal(ts.isObjectLiteralElement(node), true, message);
}

export function isObjectLiteralElementLike(
	node: Node,
	message:
		| string
		| Error = `expected ObjectLiteralElementLike, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ObjectLiteralElementLike {
	assert.equal(ts.isObjectLiteralElementLike(node), true, message);
}

export function isObjectLiteralExpression(
	node: Node,
	message:
		| string
		| Error = `expected ObjectLiteralExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ObjectLiteralExpression {
	assert.equal(ts.isObjectLiteralExpression(node), true, message);
}

export function isOmittedExpression(
	node: Node,
	message:
		| string
		| Error = `expected OmittedExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is OmittedExpression {
	assert.equal(ts.isOmittedExpression(node), true, message);
}

export function isOptionalTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected OptionalTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is OptionalTypeNode {
	assert.equal(ts.isOptionalTypeNode(node), true, message);
}

export function isParameter(
	node: Node,
	message:
		| string
		| Error = `expected ParameterDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ParameterDeclaration {
	assert.equal(ts.isParameter(node), true, message);
}

export function isParenthesizedExpression(
	node: Node,
	message:
		| string
		| Error = `expected ParenthesizedExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ParenthesizedExpression {
	assert.equal(ts.isParenthesizedExpression(node), true, message);
}

export function isParenthesizedTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected ParenthesizedTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ParenthesizedTypeNode {
	assert.equal(ts.isParenthesizedTypeNode(node), true, message);
}

export function isPartiallyEmittedExpression(
	node: Node,
	message:
		| string
		| Error = `expected PartiallyEmittedExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is PartiallyEmittedExpression {
	assert.equal(ts.isPartiallyEmittedExpression(node), true, message);
}

export function isPlusToken(
	node: Node,
	message:
		| string
		| Error = `expected PlusToken, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is PlusToken {
	assert.equal(ts.isPlusToken(node), true, message);
}

export function isPostfixUnaryExpression(
	node: Node,
	message:
		| string
		| Error = `expected PostfixUnaryExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is PostfixUnaryExpression {
	assert.equal(ts.isPostfixUnaryExpression(node), true, message);
}

export function isPrefixUnaryExpression(
	node: Node,
	message:
		| string
		| Error = `expected PrefixUnaryExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is PrefixUnaryExpression {
	assert.equal(ts.isPrefixUnaryExpression(node), true, message);
}

export function isPrivateIdentifier(
	node: Node,
	message:
		| string
		| Error = `expected PrivateIdentifier, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is PrivateIdentifier {
	assert.equal(ts.isPrivateIdentifier(node), true, message);
}

export function isPropertyAccessChain(
	node: Node,
	message:
		| string
		| Error = `expected PropertyAccessChain, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is PropertyAccessChain {
	assert.equal(ts.isPropertyAccessChain(node), true, message);
}

export function isPropertyAccessExpression(
	node: Node,
	message:
		| string
		| Error = `expected PropertyAccessExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is PropertyAccessExpression {
	assert.equal(ts.isPropertyAccessExpression(node), true, message);
}

export function isPropertyAssignment(
	node: Node,
	message:
		| string
		| Error = `expected PropertyAssignment, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is PropertyAssignment {
	assert.equal(ts.isPropertyAssignment(node), true, message);
}

export function isPropertyDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected PropertyDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is PropertyDeclaration {
	assert.equal(ts.isPropertyDeclaration(node), true, message);
}

export function isPropertyName(
	node: Node,
	message:
		| string
		| Error = `expected PropertyName, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is PropertyName {
	assert.equal(ts.isPropertyName(node), true, message);
}

export function isPropertySignature(
	node: Node,
	message:
		| string
		| Error = `expected PropertySignature, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is PropertySignature {
	assert.equal(ts.isPropertySignature(node), true, message);
}

export function isQualifiedName(
	node: Node,
	message:
		| string
		| Error = `expected QualifiedName, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is QualifiedName {
	assert.equal(ts.isQualifiedName(node), true, message);
}

export function isQuestionDotToken(
	node: Node,
	message:
		| string
		| Error = `expected QuestionDotToken, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is QuestionDotToken {
	assert.equal(ts.isQuestionDotToken(node), true, message);
}

export function isQuestionToken(
	node: Node,
	message:
		| string
		| Error = `expected QuestionToken, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is QuestionToken {
	assert.equal(ts.isQuestionToken(node), true, message);
}

export function isRegularExpressionLiteral(
	node: Node,
	message:
		| string
		| Error = `expected RegularExpressionLiteral, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is RegularExpressionLiteral {
	assert.equal(ts.isRegularExpressionLiteral(node), true, message);
}

export function isRestTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected RestTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is RestTypeNode {
	assert.equal(ts.isRestTypeNode(node), true, message);
}

export function isReturnStatement(
	node: Node,
	message:
		| string
		| Error = `expected ReturnStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ReturnStatement {
	assert.equal(ts.isReturnStatement(node), true, message);
}

export function isSatisfiesExpression(
	node: Node,
	message:
		| string
		| Error = `expected SatisfiesExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is SatisfiesExpression {
	assert.equal(ts.isSatisfiesExpression(node), true, message);
}

export function isSemicolonClassElement(
	node: Node,
	message:
		| string
		| Error = `expected SemicolonClassElement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is SemicolonClassElement {
	assert.equal(ts.isSemicolonClassElement(node), true, message);
}

export function isSetAccessor(
	node: Node,
	message:
		| string
		| Error = `expected SetAccessorDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is SetAccessorDeclaration {
	assert.equal(ts.isSetAccessor(node), true, message);
}

export function isSetAccessorDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected SetAccessorDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is SetAccessorDeclaration {
	assert.equal(ts.isSetAccessorDeclaration(node), true, message);
}

export function isShorthandPropertyAssignment(
	node: Node,
	message:
		| string
		| Error = `expected ShorthandPropertyAssignment, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ShorthandPropertyAssignment {
	assert.equal(ts.isShorthandPropertyAssignment(node), true, message);
}

export function isSourceFile(
	node: Node,
	message:
		| string
		| Error = `expected SourceFile, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is SourceFile {
	assert.equal(ts.isSourceFile(node), true, message);
}

export function isSpreadAssignment(
	node: Node,
	message:
		| string
		| Error = `expected SpreadAssignment, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is SpreadAssignment {
	assert.equal(ts.isSpreadAssignment(node), true, message);
}

export function isSpreadElement(
	node: Node,
	message:
		| string
		| Error = `expected SpreadElement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is SpreadElement {
	assert.equal(ts.isSpreadElement(node), true, message);
}

export function isStatement(
	node: Node,
	message:
		| string
		| Error = `expected Statement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is Statement {
	assert.equal(ts.isStatement(node), true, message);
}

export function isStringLiteral(
	node: Node,
	message:
		| string
		| Error = `expected StringLiteral, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is StringLiteral {
	assert.equal(ts.isStringLiteral(node), true, message);
}

export function isSwitchStatement(
	node: Node,
	message:
		| string
		| Error = `expected SwitchStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is SwitchStatement {
	assert.equal(ts.isSwitchStatement(node), true, message);
}

export function isSyntheticExpression(
	node: Node,
	message:
		| string
		| Error = `expected SyntheticExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is SyntheticExpression {
	assert.equal(ts.isSyntheticExpression(node), true, message);
}

export function isTaggedTemplateExpression(
	node: Node,
	message:
		| string
		| Error = `expected TaggedTemplateExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TaggedTemplateExpression {
	assert.equal(ts.isTaggedTemplateExpression(node), true, message);
}

export function isTemplateExpression(
	node: Node,
	message:
		| string
		| Error = `expected TemplateExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TemplateExpression {
	assert.equal(ts.isTemplateExpression(node), true, message);
}

export function isTemplateHead(
	node: Node,
	message:
		| string
		| Error = `expected TemplateHead, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TemplateHead {
	assert.equal(ts.isTemplateHead(node), true, message);
}

export function isTemplateLiteral(
	node: Node,
	message:
		| string
		| Error = `expected TemplateLiteral, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TemplateLiteral {
	assert.equal(ts.isTemplateLiteral(node), true, message);
}

export function isTemplateLiteralToken(
	node: Node,
	message:
		| string
		| Error = `expected TemplateLiteralToken, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TemplateLiteralToken {
	assert.equal(ts.isTemplateLiteralToken(node), true, message);
}

export function isTemplateLiteralTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected TemplateLiteralTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TemplateLiteralTypeNode {
	assert.equal(ts.isTemplateLiteralTypeNode(node), true, message);
}

export function isTemplateLiteralTypeSpan(
	node: Node,
	message:
		| string
		| Error = `expected TemplateLiteralTypeSpan, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TemplateLiteralTypeSpan {
	assert.equal(ts.isTemplateLiteralTypeSpan(node), true, message);
}

export function isTemplateMiddle(
	node: Node,
	message:
		| string
		| Error = `expected TemplateMiddle, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TemplateMiddle {
	assert.equal(ts.isTemplateMiddle(node), true, message);
}

export function isTemplateSpan(
	node: Node,
	message:
		| string
		| Error = `expected TemplateSpan, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TemplateSpan {
	assert.equal(ts.isTemplateSpan(node), true, message);
}

export function isTemplateTail(
	node: Node,
	message:
		| string
		| Error = `expected TemplateTail, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TemplateTail {
	assert.equal(ts.isTemplateTail(node), true, message);
}

export function isThisTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected ThisTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ThisTypeNode {
	assert.equal(ts.isThisTypeNode(node), true, message);
}

export function isThrowStatement(
	node: Node,
	message:
		| string
		| Error = `expected ThrowStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is ThrowStatement {
	assert.equal(ts.isThrowStatement(node), true, message);
}

export function isTryStatement(
	node: Node,
	message:
		| string
		| Error = `expected TryStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TryStatement {
	assert.equal(ts.isTryStatement(node), true, message);
}

export function isTupleTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected TupleTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TupleTypeNode {
	assert.equal(ts.isTupleTypeNode(node), true, message);
}

export function isTypeAliasDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected TypeAliasDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypeAliasDeclaration {
	assert.equal(ts.isTypeAliasDeclaration(node), true, message);
}

export function isTypeAssertionExpression(
	node: Node,
	message:
		| string
		| Error = `expected TypeAssertion, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypeAssertion {
	assert.equal(ts.isTypeAssertionExpression(node), true, message);
}

export function isTypeElement(
	node: Node,
	message:
		| string
		| Error = `expected TypeElement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypeElement {
	assert.equal(ts.isTypeElement(node), true, message);
}

export function isTypeLiteralNode(
	node: Node,
	message:
		| string
		| Error = `expected TypeLiteralNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypeLiteralNode {
	assert.equal(ts.isTypeLiteralNode(node), true, message);
}

export function isTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected TypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypeNode {
	assert.equal(ts.isTypeNode(node), true, message);
}

export function isTypeOfExpression(
	node: Node,
	message:
		| string
		| Error = `expected TypeOfExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypeOfExpression {
	assert.equal(ts.isTypeOfExpression(node), true, message);
}

export function isTypeOnlyExportDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected TypeOnlyExportDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypeOnlyExportDeclaration {
	assert.equal(ts.isTypeOnlyExportDeclaration(node), true, message);
}

export function isTypeOnlyImportDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected TypeOnlyImportDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypeOnlyImportDeclaration {
	assert.equal(ts.isTypeOnlyImportDeclaration(node), true, message);
}

export function isTypeOnlyImportOrExportDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected TypeOnlyAliasDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypeOnlyAliasDeclaration {
	assert.equal(ts.isTypeOnlyImportOrExportDeclaration(node), true, message);
}

export function isTypeOperatorNode(
	node: Node,
	message:
		| string
		| Error = `expected TypeOperatorNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypeOperatorNode {
	assert.equal(ts.isTypeOperatorNode(node), true, message);
}

export function isTypeParameterDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected TypeParameterDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypeParameterDeclaration {
	assert.equal(ts.isTypeParameterDeclaration(node), true, message);
}

export function isTypePredicateNode(
	node: Node,
	message:
		| string
		| Error = `expected TypePredicateNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypePredicateNode {
	assert.equal(ts.isTypePredicateNode(node), true, message);
}

export function isTypeQueryNode(
	node: Node,
	message:
		| string
		| Error = `expected TypeQueryNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypeQueryNode {
	assert.equal(ts.isTypeQueryNode(node), true, message);
}

export function isTypeReferenceNode(
	node: Node,
	message:
		| string
		| Error = `expected TypeReferenceNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is TypeReferenceNode {
	assert.equal(ts.isTypeReferenceNode(node), true, message);
}

export function isUnionTypeNode(
	node: Node,
	message:
		| string
		| Error = `expected UnionTypeNode, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is UnionTypeNode {
	assert.equal(ts.isUnionTypeNode(node), true, message);
}

export function isVariableDeclaration(
	node: Node,
	message:
		| string
		| Error = `expected VariableDeclaration, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is VariableDeclaration {
	assert.equal(ts.isVariableDeclaration(node), true, message);
}

export function isVariableDeclarationList(
	node: Node,
	message:
		| string
		| Error = `expected VariableDeclarationList, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is VariableDeclarationList {
	assert.equal(ts.isVariableDeclarationList(node), true, message);
}

export function isVariableStatement(
	node: Node,
	message:
		| string
		| Error = `expected VariableStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is VariableStatement {
	assert.equal(ts.isVariableStatement(node), true, message);
}

export function isVoidExpression(
	node: Node,
	message:
		| string
		| Error = `expected VoidExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is VoidExpression {
	assert.equal(ts.isVoidExpression(node), true, message);
}

export function isWhileStatement(
	node: Node,
	message:
		| string
		| Error = `expected WhileStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is WhileStatement {
	assert.equal(ts.isWhileStatement(node), true, message);
}

export function isWithStatement(
	node: Node,
	message:
		| string
		| Error = `expected WithStatement, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is WithStatement {
	assert.equal(ts.isWithStatement(node), true, message);
}

export function isYieldExpression(
	node: Node,
	message:
		| string
		| Error = `expected YieldExpression, received ${ts.SyntaxKind[node.kind]}`,
): asserts node is YieldExpression {
	assert.equal(ts.isYieldExpression(node), true, message);
}

export default {
	isAccessor,
	isArrayBindingElement,
	isArrayBindingPattern,
	isArrayLiteralExpression,
	isArrayTypeNode,
	isArrowFunction,
	isAsExpression,
	isAssertionExpression,
	isAssertsKeyword,
	isAsteriskToken,
	isAutoAccessorPropertyDeclaration,
	isAwaitExpression,
	isAwaitKeyword,
	isBigIntLiteral,
	isBinaryExpression,
	isBinaryOperatorToken,
	isBindingElement,
	isBindingName,
	isBlock,
	isBreakOrContinueStatement,
	isBreakStatement,
	isBundle,
	isCallChain,
	isCallExpression,
	isCallLikeExpression,
	isCallSignatureDeclaration,
	isCaseBlock,
	isCaseClause,
	isCaseOrDefaultClause,
	isCatchClause,
	isClassDeclaration,
	isClassElement,
	isClassExpression,
	isClassLike,
	isClassStaticBlockDeclaration,
	isColonToken,
	isCommaListExpression,
	isComputedPropertyName,
	isConciseBody,
	isConditionalExpression,
	isConditionalTypeNode,
	isConstructorDeclaration,
	isConstructorTypeNode,
	isConstructSignatureDeclaration,
	isContinueStatement,
	isDebuggerStatement,
	isDeclarationStatement,
	isDecorator,
	isDefaultClause,
	isDeleteExpression,
	isDoStatement,
	isDotDotDotToken,
	isElementAccessChain,
	isElementAccessExpression,
	isEmptyBindingPattern,
	isEmptyStatement,
	isEntityName,
	isEnumDeclaration,
	isEnumMember,
	isEqualsGreaterThanToken,
	isExclamationToken,
	isExportAssignment,
	isExportDeclaration,
	isExportSpecifier,
	isExpression,
	isExpressionStatement,
	isExpressionWithTypeArguments,
	isExternalModuleReference,
	isForInitializer,
	isForInStatement,
	isForOfStatement,
	isForStatement,
	isFunctionDeclaration,
	isFunctionExpression,
	isFunctionTypeNode,
	isGetAccessor,
	isGetAccessorDeclaration,
	isHeritageClause,
	isIdentifier,
	isIfStatement,
	isImportAttribute,
	isImportAttributeName,
	isImportAttributes,
	isImportClause,
	isImportDeclaration,
	isImportEqualsDeclaration,
	isImportSpecifier,
	isImportTypeNode,
	isIndexedAccessTypeNode,
	isIndexSignatureDeclaration,
	isInferTypeNode,
	isInterfaceDeclaration,
	isIntersectionTypeNode,
	isJSDoc,
	isJSDocAllType,
	isJSDocAugmentsTag,
	isJSDocAuthorTag,
	isJSDocCallbackTag,
	isJSDocClassTag,
	isJSDocDeprecatedTag,
	isJSDocEnumTag,
	isJSDocFunctionType,
	isJSDocImplementsTag,
	isJSDocImportTag,
	isJSDocLink,
	isJSDocLinkCode,
	isJSDocLinkPlain,
	isJSDocMemberName,
	isJSDocNamepathType,
	isJSDocNameReference,
	isJSDocNonNullableType,
	isJSDocNullableType,
	isJSDocOptionalType,
	isJSDocOverloadTag,
	isJSDocOverrideTag,
	isJSDocParameterTag,
	isJSDocPrivateTag,
	isJSDocPropertyLikeTag,
	isJSDocPropertyTag,
	isJSDocProtectedTag,
	isJSDocPublicTag,
	isJSDocReadonlyTag,
	isJSDocReturnTag,
	isJSDocSatisfiesTag,
	isJSDocSeeTag,
	isJSDocSignature,
	isJSDocTemplateTag,
	isJSDocThisTag,
	isJSDocThrowsTag,
	isJSDocTypedefTag,
	isJSDocTypeExpression,
	isJSDocTypeLiteral,
	isJSDocTypeTag,
	isJSDocUnknownTag,
	isJSDocUnknownType,
	isJSDocVariadicType,
	isJsxAttribute,
	isJsxAttributeLike,
	isJsxAttributes,
	isJsxCallLike,
	isJsxChild,
	isJsxClosingElement,
	isJsxClosingFragment,
	isJsxElement,
	isJsxExpression,
	isJsxFragment,
	isJsxNamespacedName,
	isJsxOpeningElement,
	isJsxOpeningFragment,
	isJsxOpeningLikeElement,
	isJsxSelfClosingElement,
	isJsxSpreadAttribute,
	isJsxTagNameExpression,
	isJsxText,
	isLabeledStatement,
	isLeftHandSideExpression,
	isLiteralExpression,
	isLiteralTypeNode,
	isMappedTypeNode,
	isMemberName,
	isMetaProperty,
	isMethodDeclaration,
	isMethodSignature,
	isMinusToken,
	isMissingDeclaration,
	isModifier,
	isModifierLike,
	isModuleBlock,
	isModuleBody,
	isModuleDeclaration,
	isModuleExportName,
	isModuleName,
	isModuleReference,
	isNamedExportBindings,
	isNamedExports,
	isNamedImportBindings,
	isNamedImports,
	isNamedTupleMember,
	isNamespaceExport,
	isNamespaceExportDeclaration,
	isNamespaceImport,
	isNewExpression,
	isNonNullChain,
	isNonNullExpression,
	isNoSubstitutionTemplateLiteral,
	isNotEmittedStatement,
	isNumericLiteral,
	isObjectBindingPattern,
	isObjectLiteralElement,
	isObjectLiteralElementLike,
	isObjectLiteralExpression,
	isOmittedExpression,
	isOptionalTypeNode,
	isParameter,
	isParenthesizedExpression,
	isParenthesizedTypeNode,
	isPartiallyEmittedExpression,
	isPlusToken,
	isPostfixUnaryExpression,
	isPrefixUnaryExpression,
	isPrivateIdentifier,
	isPropertyAccessChain,
	isPropertyAccessExpression,
	isPropertyAssignment,
	isPropertyDeclaration,
	isPropertyName,
	isPropertySignature,
	isQualifiedName,
	isQuestionDotToken,
	isQuestionToken,
	isRegularExpressionLiteral,
	isRestTypeNode,
	isReturnStatement,
	isSatisfiesExpression,
	isSemicolonClassElement,
	isSetAccessor,
	isSetAccessorDeclaration,
	isShorthandPropertyAssignment,
	isSourceFile,
	isSpreadAssignment,
	isSpreadElement,
	isStatement,
	isStringLiteral,
	isSwitchStatement,
	isSyntheticExpression,
	isTaggedTemplateExpression,
	isTemplateExpression,
	isTemplateHead,
	isTemplateLiteral,
	isTemplateLiteralToken,
	isTemplateLiteralTypeNode,
	isTemplateLiteralTypeSpan,
	isTemplateMiddle,
	isTemplateSpan,
	isTemplateTail,
	isThisTypeNode,
	isThrowStatement,
	isTryStatement,
	isTupleTypeNode,
	isTypeAliasDeclaration,
	isTypeAssertionExpression,
	isTypeElement,
	isTypeLiteralNode,
	isTypeNode,
	isTypeOfExpression,
	isTypeOnlyExportDeclaration,
	isTypeOnlyImportDeclaration,
	isTypeOnlyImportOrExportDeclaration,
	isTypeOperatorNode,
	isTypeParameterDeclaration,
	isTypePredicateNode,
	isTypeQueryNode,
	isTypeReferenceNode,
	isUnionTypeNode,
	isVariableDeclaration,
	isVariableDeclarationList,
	isVariableStatement,
	isVoidExpression,
	isWhileStatement,
	isWithStatement,
	isYieldExpression,
};
