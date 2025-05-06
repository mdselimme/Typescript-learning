"use strict";
// GETTER AND SETTER METHOD IN TS 
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(userId, name, balance) {
        this.userId = userId;
        this.name = name;
        this._balance = balance;
    }
    // addBalance(amount: number) {
    //     this._balance = this._balance + amount;
    // }
    set deposit(amount) {
        this._balance = amount + this._balance;
    }
    // getBalance() {
    //     return this._balance;
    // }
    // getter method 
    get Balance() {
        return this._balance;
    }
}
;
const myBankAccount = new BankAccount(111, "Selim", 500);
myBankAccount.deposit = 100;
const myBalance = myBankAccount.Balance;
console.log(myBalance);
