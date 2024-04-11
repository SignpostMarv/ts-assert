# @signpostmarv/ts-assert

Code-generated assertions for TypeScript type guarding functions.

# Usage

```ts
import {describe, it} from 'node:test';
import ts_assert from '@signpostmarv/ts-assert';
import ts from 'typescript';

void describe('example', () => {
	void it('replaces this', () => {
		assert.equal(
			ts.isEmptyBindingPattern(ts.factory.createIdentifier('foo')),
			true
		);
	});
	void it('with this', () => {
		ts_assert.isEmptyBindingPattern(ts.factory.createIdentifier('foo'));
	});
});
```
