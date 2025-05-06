
// GETTER AND SETTER METHOD IN TS 




class BankAccount {
    public readonly userId: number
    public name: string
    protected _balance: number//if you want to access this property from another class than use protected otherwise use private
    constructor(userId: number, name: string, balance: number) {
        this.userId = userId
        this.name = name
        this._balance = balance
    }
    // addBalance(amount: number) {
    //     this._balance = this._balance + amount;
    // }

    set deposit(amount:number){
        this._balance = amount + this._balance
    }

    // getBalance() {
    //     return this._balance;
    // }
    // getter method 
    get Balance(){
        return this._balance;
    }
};



const myBankAccount = new BankAccount(111, "Selim", 500);

myBankAccount.deposit = 100

const myBalance = myBankAccount.Balance

console.log(myBalance);















export {}