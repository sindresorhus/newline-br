'use strict';
module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError('Expected a string');
	}

	return input.replace(/\r?\n/g, '<br>$&');
};
