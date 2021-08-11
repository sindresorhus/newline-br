export default function newlineBr(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	return string.replace(/\r?\n/g, '<br>$&');
}
