const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
    it('test the result of getPaymentTokenFromAPI(true)', async () => {
        const data = {data: 'Successful response from the API' };
        const payment = await getPaymentTokenFromAPI(true);
        chai.expect(payment).to.deep.equal(data);
    });

    it('test the result of getPaymentTokenFromAPI(false)', () => {
        const payment = getPaymentTokenFromAPI(false);
        console.log('Payment', payment);
        chai.expect(payment).to.equal(undefined);
    });
});
