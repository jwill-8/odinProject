import Vehicle from "./vehicle.js";

export default class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  displayDetails() {
    console.log(this.make, this.model, this.year, this.doors);
  }
}
