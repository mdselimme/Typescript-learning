"use strict";
//ABSTRACTION
Object.defineProperty(exports, "__esModule", { value: true });
// idea implements in really 
class Car {
    startEngine() {
        console.log("I am starting the car engine");
    }
    stopEngine() {
        console.log("I am stopping the car engine");
    }
    move() {
        console.log("Move the car");
    }
    test() {
        console.log("Test the car");
    }
}
const toyotaCar = new Car();
toyotaCar.startEngine();
// ABSTRACT CLASS 
class Vehicle2 {
    test() {
        console.log("Test the car");
    }
}
class ToyotaVehicle extends Vehicle2 {
    startEngine() {
        console.log("I am starting the car engine");
    }
    stopEngine() {
        console.log("I am stopping the car engine");
    }
    move() {
        console.log("Move the car");
    }
}
const car2 = new ToyotaVehicle();
car2.startEngine();
