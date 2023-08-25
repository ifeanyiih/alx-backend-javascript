const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const sinon = require('sinon');
const assert = require('assert');

describe("sendPaymentRequestToApi", function () {

    it("Utils.calculateNumber is called once", () => {
        const spy = sinon.spy(Utils, "calculateNumber");
        sendPaymentRequestToApi(100, 20);
        assert(spy.calledOnce);
        Utils.calculateNumber.restore();
    });

    it("Utils.calculateNumber is called with the right args", () => {
        const spy = sinon.spy(Utils, "calculateNumber");
        sendPaymentRequestToApi(100, 20);
        assert(spy.calledWith('SUM', 100, 20));
        Utils.calculateNumber.restore();
    });
});
