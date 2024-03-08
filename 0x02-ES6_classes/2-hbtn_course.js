// Filename: 2-hbtn_course.js

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'Name');
    this._length = this.validateNumber(length, 'Length');
    this._students = this.validateStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.validateString(value, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this.validateNumber(value, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this.validateStudents(value);
  }

  // eslint-disable-next-line class-methods-use-this
  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  validateNumber(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  validateStudents(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }
}
