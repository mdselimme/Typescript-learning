

//ABSTRACTION

//abstraction : 1. interface 2. abstract

// idea making 
interface Vehicle {
    startEngine(): void
    stopEngine(): void
    move(): void
}

// idea implements in really 
class Car implements Vehicle {
    startEngine(): void {
        console.log("I am starting the car engine");
    }
    stopEngine(): void {
        console.log("I am stopping the car engine")
    }
    move(): void {
        console.log("Move the car")
    }
    test() {
        console.log("Test the car")
    }
}

const toyotaCar = new Car();
toyotaCar.startEngine()

// ABSTRACT CLASS 

abstract class Vehicle2 {
    abstract startEngine(): void
    abstract stopEngine(): void
    abstract move(): void
    test() {
        console.log("Test the car")
    }
}

class ToyotaVehicle extends Vehicle2 {
    startEngine(): void {
        console.log("I am starting the car engine");
    }
    stopEngine(): void {
        console.log("I am stopping the car engine")
    }
    move(): void {
        console.log("Move the car")
    }
}

const car2 = new ToyotaVehicle()

car2.startEngine()



export { }