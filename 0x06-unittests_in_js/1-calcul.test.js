const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('CalculateNumber', () => {
    describe('SUM', () => {
        it('should return 6', () => {
            assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    
    describe('SUBTRACT', () => {
        it('should return -4', () => {
            assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    
    describe('DIVIDE', () => {
        it('should return Error', () => {
            assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });
});
