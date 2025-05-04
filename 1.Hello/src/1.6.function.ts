
// typescript function 

function add(num1 : number, num2: number):number{
 return num1 + num2;
}


add(2, 2);


const addNum = (num1 : number, num2 : number): number => num1 + num2


// object -> function -> method 

const richUser = {
    name: "Selim",
    balance:10000,
    addBalance(balance: number):string{
        return `My new balance is ${this.balance + balance}`
    }
}

const arr: number[] = [1, 4, 10]

const newArray : number[] = arr.map((n: number): number=> n*n);