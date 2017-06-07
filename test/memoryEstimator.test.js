
const { expect } = require('chai');
const memoryEstimator = require('../utils/memoryEstimator');

describe('memoryEstimator', function() {
	it('string', function() {
		expect(memoryEstimator('kaka')).to.equal(12);
	});

	it('number', function() {
		expect(memoryEstimator(2)).to.equal(8);
	});

	it('boolean', function() {
		expect(memoryEstimator(false)).to.equal(4);
	});

	it('object', function() {
		expect(memoryEstimator({ 'kaka': 2 })).to.equal(28);
	});

	it('array', function() {
		expect(memoryEstimator([ 2, 'kaka' ])).to.equal(24);
	});
});
