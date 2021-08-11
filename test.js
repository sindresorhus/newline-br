import test from 'ava';
import newlineBr from './index.js';

test('main', t => {
	t.is(newlineBr('foo\nbar'), 'foo<br>\nbar');
	t.is(newlineBr('foo\n\nbar'), 'foo<br>\n<br>\nbar');
	t.is(newlineBr('\r\nfoo\n\nbar'), '<br>\r\nfoo<br>\n<br>\nbar');
});
