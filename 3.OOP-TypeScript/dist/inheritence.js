"use strict";
// TYPESCRIPT OOP INHERITENCE 
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, userId, dutyHours) {
        this.name = name;
        this.userId = userId;
        this.dutyHours = dutyHours;
    }
    getDetails(happy) {
        console.log(`His name is ${this.name}; His UserId is ${this.userId}; DutyHours: ${this.dutyHours} and He is So much ${happy}`);
    }
}
class Worker extends Person {
    // name: string;
    // userId: number
    // dutyHours: number
    constructor(name, userId, dutyHours) {
        super(name, userId, dutyHours);
    }
}
;
const worker1 = new Worker('Selim', 1230, 8);
worker1.getDetails("Happy");
worker1.getDetails("Selim");
class Director extends Person {
    constructor(name, userId, dutyHours) {
        super(name, userId, dutyHours);
    }
    giveSalary(salary) {
        console.log(`Giving salary ${salary}`);
    }
}
;
const director = new Director('Selim', 1230, 8);
worker1.getDetails("Happy");
