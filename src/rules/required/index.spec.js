var required = require('./index');

describe('required rule', function () {
	it ('should return undefined if property is found', function () {
		var result = required('property', 'ayy lmao');

		expect(result).not.toBeDefined();
	});

	it ('should return error if property is not found', function () {
		var result = required('property', undefined);

		expect(result).toBe('is required');
	});
});