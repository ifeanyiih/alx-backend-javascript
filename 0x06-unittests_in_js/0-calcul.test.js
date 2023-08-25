const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('CaluculateNumber', function () {
    it('should return 4', function () {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
    
    it('should return 5', function () {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return 6', function () {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
    
    it('should return  4', function () {
        assert.strictEqual(calculateNumber(1.7, 2), 4);
    });

    it('should return 1', function () {
        assert.strictEqual(calculateNumber(-2.8, 4.1), 1);
    });
});
