let assert = require('assert');
let calculator = require('../src/index');

describe('Calculator suite', () => {
    it('should add numbers correctly', () => {
        assert.equal(calculator.add(2, 3), 5);
    });
    it('should substract numbers correctly', () => {
        assert.equal(calculator.sub(5, 3), 2);
    });
    it('should multiply numbers correctly', () => {
        assert.equal(calculator.mul(5, 2), 10);
    });
    it('should divides numbers correctly', () => {
        assert.equal(calculator.div(6, 2), 3);
    });
    it('should not divide by 0', () => {
        assert.equal(calculator.div(6, 0), Infinity);
    });
    it('should return the average of the numbers', () => {
        assert.equal(calculator.avg([1, 3, 7, 12]), 5.75);
    });
});
