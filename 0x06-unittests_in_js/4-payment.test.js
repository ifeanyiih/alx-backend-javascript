const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const sinon = require('sinon');
const assert = require('assert');

describe("Use Utils as a spy", function () {
    const sandbox = sinon.createSandbox();

    beforeEach(function () {
        sandbox.spy(console);
        sandbox.stub(Utils, "calculateNumber").callsFake(() => 10);
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("Utils.calculateNumber is called with the right args", () => {
        sendPaymentRequestToApi(100, 20);
        assert.equal(Utils.calculateNumber.calledWith('SUM', 100, 20), true);
    });
    
    it("console.log logs the correct message", () => {
        sendPaymentRequestToApi(100, 20)
        assert.equal(console.log.args, 'The total is: 10'); 
    });
});
