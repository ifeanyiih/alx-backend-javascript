import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    if (!(typeof amount === 'number')) {
      throw new TypeError('Amount must be a Number');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}