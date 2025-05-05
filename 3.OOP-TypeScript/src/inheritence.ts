

// TYPESCRIPT OOP INHERITENCE 

class Person {
    name: string;
    userId: number
    dutyHours: number
    constructor(name: string, userId: number, dutyHours: number){
        this.name = name
        this.userId = userId
        this.dutyHours = dutyHours
    }
    getDetails(happy: string){
        console.log(`His name is ${this.name}; His UserId is ${this.userId}; DutyHours: ${this.dutyHours} and He is So much ${happy}`);
    }
}

class Worker extends Person {
    // name: string;
    // userId: number
    // dutyHours: number
    constructor(name: string, userId: number, dutyHours: number){
        super(name, userId, dutyHours)
    }
};

const worker1 = new Worker('Selim', 1230, 8);
worker1.getDetails("Happy");
worker1.getDetails("Selim")


class Director extends Person {
    
    constructor(name: string, userId: number, dutyHours: number){
        super(name, userId, dutyHours)
    }
    giveSalary(salary:number){
        console.log(`Giving salary ${salary}`);
    }
};

const director = new Director('Selim', 1230, 8);
worker1.getDetails("Happy");









export {}