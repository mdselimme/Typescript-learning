"use strict";
// CLASS IN TS 
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name, roll, readInClass) {
        this.name = name;
        this.roll = roll;
        this.readInClass = readInClass;
    }
    makeSound() {
        console.log(`The ${this.readInClass} class you read`);
    }
}
const std1 = new Student("Selim", 12, 5);
const std2 = new Student("Usuf", 12, 5);
console.log(std1.makeSound());
// TypeScript Method 
class StudentTwo {
    constructor(name, roll, readInClass) {
        this.name = name;
        this.roll = roll;
        this.readInClass = readInClass;
    }
    ;
    readInClassPrint() {
        console.log(`His name is ${this.name}. His roll is ${this.roll}. He is read in class ${this.readInClass}`);
    }
}
;
const student1 = new StudentTwo("Selim", 1, 12);
student1.readInClassPrint();
