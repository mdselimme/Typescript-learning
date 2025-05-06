"use strict";
// POLYMORPHISM IN TYPESCRIPT
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    getSleep() {
        console.log("A person Sleep Daily 8 Hours");
    }
}
;
class Student extends Person {
    getSleep() {
        console.log("A student Sleep Daily 7 Hours");
    }
}
class Teacher extends Person {
    getSleep() {
        console.log("A teacher Sleep Daily 6 Hours");
    }
}
;
const getCaller = (val) => {
    val.getSleep();
};
const result1 = new Person();
const result2 = new Student();
const result3 = new Teacher();
getCaller(result1);
getCaller(result2);
getCaller(result3);
class Shape {
    getArea() {
        return 0;
    }
}
;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return parseInt((Math.PI * this.radius * this.radius).toFixed(2));
    }
}
class Square {
    constructor(bahu) {
        this.bahu = bahu;
    }
    getArea() {
        return parseInt((this.bahu * this.bahu).toFixed(2));
    }
}
const getAreaValue = (value) => {
    const result = value.getArea();
    console.log(result);
};
const res1 = new Shape();
const res2 = new Circle(20);
const res3 = new Square(25);
getAreaValue(res1);
getAreaValue(res2);
getAreaValue(res3);
