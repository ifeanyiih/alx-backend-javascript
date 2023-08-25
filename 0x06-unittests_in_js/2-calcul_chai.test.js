const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('CalculateNumber', () => {
    describe('SUM', () => {
        it('should return 6', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return 3', () => {
            expect(calculateNumber('SUM', 1, 2)).to.equal(3);
        });

        it('should return 0', () => {
            expect(calculateNumber('SUM', -1, 1)).to.equal(0);
        });
    });

    
    describe('SUBTRACT', () => {
        it('should return -4', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return -1', () => {
            expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
        });
    });

    
    describe('DIVIDE', () => {
        it('should return Error', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    
    describe('DIVIDE', () => {
        it('should return 2', () => {
            expect(calculateNumber('DIVIDE', 6, 2.5)).to.equal(2);
        });
    });
});
