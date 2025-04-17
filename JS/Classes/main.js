import Person from "./person.js";

const p1 = new Person("James", 27, "USA");
const p2 = new Person("Mike", 35, "Canada");
p1.getFullDetails();
p2.getFullDetails();

import Rectangle from "./rectangle.js";

const notASquare = new Rectangle(100, 50);
console.log(notASquare.area());
console.log(notASquare.perimeter());

import Car from "./car.js";

const myCar = new Car("Nissan", "Altima", 2018, 4);
myCar.displayDetails();

import BankAccount from "./bank.js";

const myMoney = new BankAccount(1000);

myMoney.makeDeposit(300);
myMoney.makeWithdrawal(150);
myMoney.makeDeposit(1000);
myMoney.makeWithdrawal(10000);
myMoney.getBalance();
