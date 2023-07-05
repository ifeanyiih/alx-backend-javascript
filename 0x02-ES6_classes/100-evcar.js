import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
    this._super = Car;
  }

  get [Symbol.species]() {
    return this._super;
  }

  cloneCar() {
    return new this[Symbol.species]();
  }
}
