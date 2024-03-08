// Filename: 100-evcar.js
import Car from './10-car';

const _range = ('_range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  get range() {
    return this[_range];
  }

  set range(value) {
    this[_range] = value;
  }

  cloneCar() {
    const clonedCar = new Car();
    Object.assign(clonedCar, this);
    return clonedCar;
  }
}
