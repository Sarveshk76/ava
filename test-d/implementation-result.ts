/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function */
import test from '..';

test('return a promise-like', t => ({
	then(resolve) {
		resolve?.();
	},
}));

test('return a subscribable', t => ({
	subscribe({complete}) {
		complete();
	},
}));

test.after('return anything else', t => ({
	foo: 'bar',
	subscribe() {},
	then() {},
}));
