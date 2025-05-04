const num: number = 50;

console.log(num);

const poorUser = {
    name: "Selim",
    balance:0,
    addBalance(balance:number):string{
        return `My new balance is : ${this.balance+ balance}`
    }
}