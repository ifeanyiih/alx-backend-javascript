const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const sinon = require('sinon');
const assert = require('assert');

describe("Use Utils as a spy", function () {
    let spy;

    beforeEach(function () {
        spy = sinon.spy(console, "log");
    });

    afterEach(function () {
        spy.restore();
    });

    it("Verify console", () => {
        sendPaymentRequestToApi(100, 20);
        assert.equal(spy.args, 'The total is: 120');
        assert.equal(spy.calledOnce, true);
    });
    
    it("console.log logs the correct message", () => {
        sendPaymentRequestToApi(10, 10)
        assert.equal(spy.args, 'The total is: 20'); 
        assert.equal(spy.calledOnce, true);
    });
});
