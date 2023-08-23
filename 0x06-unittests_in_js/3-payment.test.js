const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const sinon = require('sinon');
const assert = require('assert');

describe("Use Utils as a spy", function () {
    const sandbox = sinon.createSandbox();

    beforeEach(function () {
        sandbox.spy(Utils);
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("Utils.calculateNumber is called once", () => {
        sendPaymentRequestToApi(100, 20);
        assert.equal(Utils.calculateNumber.calledOnce, true);
    });

    it("Utils.calculateNumber is called with the right args", () => {
        sendPaymentRequestToApi(100, 20);
        assert.equal(Utils.calculateNumber.calledWith('SUM', 100, 20), true);
    });
});
