"use strict";
// CLASS IN TS
/* class Person {
    nameIs: string
}

const person = new Person();

person.nameIs = "Jane";

console.log(Person.name)

*/
//Member visibility 
class Vehicle {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
;
const vehicle = new Vehicle("VHC-001", "Truck");
console.log(vehicle.getName());
// PARAMETER PROPERTIES 
class Vehicle2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.id = id;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
;
const vehicle2 = new Vehicle2("VHC-002", "Car");
console.log(vehicle2.getName());
// READONLY METHOD IN TS 
class Vehicle3 {
    constructor(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
}
;
const vehicle3 = new Vehicle3("VHC-003");
console.log(vehicle3.getId());
;
class Vehicle4 {
    constructor(id, model) {
        this.id = id;
        this.model = model;
    }
    ;
    getCarName() {
        return this.model;
    }
}
const vehicle5 = new Vehicle4("VHC-005", "Tesla");
console.log(vehicle5.getCarName());
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    getArea() {
        return this.width * this.height;
    }
}
;
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}
;
const mySquare = new Square(50);
console.log(mySquare.getArea());
class VehicleOver {
    constructor(id, name, height) {
        this.id = id;
        this.name = name;
        this.height = height;
    }
    getName() {
        return this.name;
    }
    toStr() {
        return `Vehicle Height[height=${this.height}]`;
    }
}
;
class Plane extends VehicleOver {
    constructor(id, name, height) {
        super(id, name, height);
    }
    toStr() {
        return `VehicleOverWidth[${this.height}]`;
    }
}
;
const overrideResult = new VehicleOver("VHO-562", "Tesla #3", 300);
console.log(overrideResult.getName());
console.log(overrideResult.toStr());
// ABSTRACT CLASS METHOD 
class Polygon {
    toStr() {
        return `Polygon[area=${this.getArea()}]`;
    }
}
;
class Triangle extends Polygon {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return ((1 / 2) * this.width * this.height);
    }
}
;
const absResult = new Triangle(50, 10);
console.log(absResult.getArea());
