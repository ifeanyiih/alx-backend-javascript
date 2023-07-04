export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if ((this instanceof Building) && (this.constructor.name !== 'Building')) {
      if (!(this.evacuationWarningMessage)) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
