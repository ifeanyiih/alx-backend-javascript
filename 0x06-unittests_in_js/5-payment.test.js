const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const sinon = require('sinon');
const assert = require('assert');

describe("Use Utils as a spy", function () {
    const sandbox = sinon.createSandbox();

    beforeEach(function () {
        sandbox.spy(console);
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("Verify console", () => {
        sendPaymentRequestToApi(100, 20);
        assert.equal(console.log.args, 'The total is: 120');
        assert.equal(console.log.calledOnce, true);
    });
    
    it("console.log logs the correct message", () => {
        sandbox.stub(Utils, "calculateNumber").callsFake(() => 20);
        sendPaymentRequestToApi(100, 20)
        assert.equal(console.log.args, 'The total is: 20'); 
        assert.equal(console.log.calledOnce, true);
    });
});
