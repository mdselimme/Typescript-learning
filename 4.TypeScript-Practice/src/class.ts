
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
    private id: string;
    public name: string;
    public constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
};

const vehicle = new Vehicle("VHC-001", "Truck");
console.log(vehicle.getName());

// PARAMETER PROPERTIES 

class Vehicle2 {
    public constructor(private id: string, public name: string) {
        this.id = id;
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
};

const vehicle2 = new Vehicle2("VHC-002", "Car");
console.log(vehicle2.getName());

// READONLY METHOD IN TS 

class Vehicle3 {
    private readonly id: string
    public constructor(id: string) {
        this.id = id;
    }
    public getId(): string {
        return this.id;
    }
};

const vehicle3 = new Vehicle3("VHC-003");
console.log(vehicle3.getId())

// INHERITENCE IMPLEMENTS ----

interface CarName {
    getCarName: () => string;
};

class Vehicle4 implements CarName {
    public constructor(protected readonly id: string, protected readonly model: string) { };
    public getCarName(): string {
        return this.model;
    }
}

const vehicle5 = new Vehicle4("VHC-005", "Tesla");
console.log(vehicle5.getCarName())

//INHERITANCE EXTENDS

interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) { };
    public getArea(): number {
        return this.width * this.height;
    }
};

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }
};

const mySquare = new Square(50);

console.log(mySquare.getArea());

// OVERRIDE IN CLASS

interface Type {
    getName: () => string;
}

class VehicleOver implements Type {
    public constructor(protected readonly id: string, public name: string, protected readonly height: number) { }
    public getName(): string {
        return this.name;
    }
    public toStr(): string {
        return `Vehicle Height[height=${this.height}]`;
    }
};

class Plane extends VehicleOver {
    public constructor(id: string, name: string, height: number) {
        super(id, name, height);
    }
    public override toStr(): string {
        return `VehicleOverWidth[${this.height}]`
    }
};

const overrideResult = new VehicleOver("VHO-562", "Tesla #3", 300);

console.log(overrideResult.getName())
console.log(overrideResult.toStr())

// ABSTRACT CLASS METHOD 
abstract class Polygon {
    public abstract getArea(): number;

    public toStr(): string {
        return `Polygon[area=${this.getArea()}]`
    }
};

class Triangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }
    public getArea(): number {
        return ((1 / 2) * this.width * this.height);
    }
};

const absResult = new Triangle(50, 10);
console.log(absResult.getArea())

