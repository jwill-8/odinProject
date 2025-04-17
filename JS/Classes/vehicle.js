export default class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayDetails() {
    console.log(this.make, this.model, this.year);
  }
}
