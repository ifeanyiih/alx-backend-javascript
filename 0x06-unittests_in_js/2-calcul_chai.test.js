const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('CalculateNumber', () => {
    describe('SUM', () => {
        it('should return 6', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    
    describe('SUBTRACT', () => {
        it('should return -4', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    
    describe('DIVIDE', () => {
        it('should return Error', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });
});
