import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('foo\nbar'), 'foo<br>\nbar');
	t.is(fn('foo\n\nbar'), 'foo<br>\n<br>\nbar');
	t.is(fn('\r\nfoo\n\nbar'), '<br>\r\nfoo<br>\n<br>\nbar');
});
