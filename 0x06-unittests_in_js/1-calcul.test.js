const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('CalculateNumber', () => {
    describe('SUM', () => {
        it('should return 6', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 3', () => {
            assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
        });

        it('should return 0', () => {
            assert.strictEqual(calculateNumber('SUM', -1, 1), 0);
        });
    });

    
    describe('SUBTRACT', () => {
        it('should return -4', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return -1', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1, 2), -1);
        });
    });

    
    describe('DIVIDE', () => {
        it('should return Error', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });

    
    describe('DIVIDE', () => {
        it('should return 2', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 6, 2.5), 2);
        });
    });
});
