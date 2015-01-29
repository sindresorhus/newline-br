'use strict';
var test = require('ava');
var newlineBr = require('./');

test(function (t) {
	t.assert(newlineBr('foo\nbar') === 'foo<br>\nbar');
	t.assert(newlineBr('foo\n\nbar') === 'foo<br>\n<br>\nbar');
	t.assert(newlineBr('\r\nfoo\n\nbar') === '<br>\r\nfoo<br>\n<br>\nbar');
	t.end();
});
