


//ACCESS MODIFIRES

class BankAccount {
    public readonly userId: number
    public name: string
    protected _balance: number//if you want to access this property from another class than use protected otherwise use private
    constructor(userId: number, name: string, balance: number) {
        this.userId = userId
        this.name = name
        this._balance = balance
    }
    addBalance(amount: number) {
        this._balance = this._balance + amount;
    }
    getBalance() {
        return this._balance;
    }
};

class StudentAccount extends BankAccount {
    helloBalance() {
        console.log(this._balance)
    }
}



const myBankAccount = new BankAccount(111, "Selim", 500);
// myBankAccount.userId = 5654 //cannot change because it is readonly
myBankAccount.addBalance(5600);

console.log(myBankAccount.getBalance())













export { }