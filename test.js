'use strict';

import test from 'tape';
import getAllPropertyNames from './index.js';

class Foo {
	foo() {}
	foo2() {}
}

class Bar extends Foo {
	bar() {}
	bar2() {}
}

test('Get all property names', (t) => {
	let bar = new Bar();
	let props = getAllPropertyNames(bar);

	t.ok(props.indexOf('foo') > -1, 'Contains foo');
	t.ok(props.indexOf('foo2') > -1, 'Contains foo2');
	t.ok(props.indexOf('bar') > -1, 'Contains bar');
	t.ok(props.indexOf('bar2') > -1, 'Contains bar2');
	t.end();
});
