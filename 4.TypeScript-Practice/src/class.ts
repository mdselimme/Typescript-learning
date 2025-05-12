
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







