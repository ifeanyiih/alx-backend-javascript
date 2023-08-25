const chai = require('chai');
const request = require('request');

describe('Index page', () => {
    it('should return the correct status code', (done) => {
        request('http://localhost:7865/', (err, response, body) => {
            if (err) console.log(err);
            chai.expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct result', (done) => {
        request('http://localhost:7865/', (err, response, body) => {
            if (err) console.log(err);
            chai.expect(body).to.deep.equal('Welcome to the payment system');
            done();
        });
    });
});
