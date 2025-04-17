export default class BankAccount {
  constructor(initialDeposit) {
    this.balance = initialDeposit;
  }

  makeWithdrawal(withdrawal) {
    if (withdrawal > this.balance) {
      console.log(
        `Withdrawal amount: ${withdrawal} cannot exceed Balance: ${this.balance}`
      );
      return;
    }

    this.balance = this.balance - withdrawal;
  }

  makeDeposit(deposit) {
    this.balance = this.balance + deposit;
  }

  getBalance() {
    console.log(this.balance);
  }
}
