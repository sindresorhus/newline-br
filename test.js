import test from 'ava';
import m from '.';

test('main', t => {
	t.is(m('foo\nbar'), 'foo<br>\nbar');
	t.is(m('foo\n\nbar'), 'foo<br>\n<br>\nbar');
	t.is(m('\r\nfoo\n\nbar'), '<br>\r\nfoo<br>\n<br>\nbar');
});
