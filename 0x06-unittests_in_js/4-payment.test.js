const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const sinon = require('sinon');
const assert = require('assert');

describe("Use Utils as a spy", function () {
    it("Utils.calculateNumber is called with the right args", () => {
        const stub = sinon.stub(Utils, "calculateNumber").callsFake(() => 10);
        const spy = sinon.spy(console, "log")
        sendPaymentRequestToApi(100, 20);
        assert(stub.calledWith('SUM', 100, 20));
        assert(spy.args, 'The total is: 10');
        Utils.calculateNumber.restore();
        console.log.restore();
    });
});
