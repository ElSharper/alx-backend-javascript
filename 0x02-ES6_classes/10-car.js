// Filename: 10-car.js

const _brand = ('_brand');
const _motor = ('_motor');
const _color = ('_color');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  cloneCar() {
    const clonedCar = new this.constructor();
    Object.assign(clonedCar, this);
    return clonedCar;
  }

  get brand() {
    return this[_brand];
  }

  set brand(value) {
    this[_brand] = value;
  }

  get motor() {
    return this[_motor];
  }

  set motor(value) {
    this[_motor] = value;
  }

  get color() {
    return this[_color];
  }

  set color(value) {
    this[_color] = value;
  }
}
