"use strict";
//ACCESS MODIFIRES
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(userId, name, balance) {
        this.userId = userId;
        this.name = name;
        this._balance = balance;
    }
    addBalance(amount) {
        this._balance = this._balance + amount;
    }
    getBalance() {
        return this._balance;
    }
}
;
class StudentAccount extends BankAccount {
    helloBalance() {
        console.log(this._balance);
    }
}
const myBankAccount = new BankAccount(111, "Selim", 500);
// myBankAccount.userId = 5654 //cannot change because it is readonly
myBankAccount.addBalance(5600);
console.log(myBankAccount.getBalance());
