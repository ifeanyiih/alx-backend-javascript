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

describe('cart page', () => {
    it('should return status code when :id is a number', (done) => {
        request('http://localhost:7865/cart/2', (err, response, body) => {
            if (err) console.log(err);
            chai.expect(response.statusCode).to.equal(200);
            chai.expect(body).to.equal('Payment methods for cart 2');
            done();
        });
    });

    it('should return status code when :id is NOT a number (=> 404)', (done) => {
        request('http://localhost:7865/cart/hello', (err, response, body) => {
            if (err) console.log(err);
            chai.expect(response.statusCode).to.equal(404);
            done();
        });
    });
});

describe('/login', () => {
    it('should handle /login tests', (done) => {
        const data = JSON.stringify({ "userName": "Betty" });
        const options = {
            url: 'http://localhost:7865/login',
            body: data,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        request(options, (err, res, body) => {
            chai.expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});

describe('/available_payments', () => {
    it('should handle the /available_payments tests', (done) => {
        const data = {
            payment_methods: {
                credit_cards: true,
                paypal: false
            }
        }
        request('http://localhost:7865/available_payments', (err, res, body) => {
            chai.expect(JSON.parse(body)).to.deep.equal(data);
            done();
        });
    });
});
