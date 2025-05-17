

interface Student {
    id: number;
    name: string;
    roll?: number;
};

// Required Types 

const student: Required<Student> = {
    id: 12,
    name: "Selim",
    roll: 45
};

console.log(student);

// Record Types 
//Quick Object defined

const student2: Record<string, number> = {
    "Alice": 21,
    "Bob": 25
}

console.log(student2)

// Omit types --

interface Car {
    model: string;
    price: number;
    country?: string;
};

// omit removes key from an object type 
const car1: Omit<Car, 'price'> = {
    model: "Tyo",
    country: "Japan"
};

// Pick 

const car2: Pick<Car, 'model'> = {
    model: 'toto'
}

console.log(car1)
console.log(car2);

// Exclude remove a type from a union 

type Primitive = string | number | boolean;

const valueOfType: Exclude<Primitive, string> = true
// const valueOfType2: Exclude<Primitive, string> = "true";//string cannot be used


// ReturnType Method 
type PointGenerator = () => { x: number, y: number };

const point: ReturnType<PointGenerator> = {
    x: 10,
    y: 10
}

console.log(point)

// Parameters 

interface Watch {
    name: string
    price: number
    model: string
}

const watch: Readonly<Watch> = {
    name: 'Samsung',
    price: 56,
    model: 'j8 prio'
};

// watch.model = 'apple'//can't change because it is a read only property

// Parameters  ========

type FuelType = (p: { x: string, y: number }) => void;

// [
//     p: { x: string, y: number }
// ]

const fuelType: Parameters<FuelType>[0] = {
    x: 'selim',
    y: 20
}

console.log(fuelType)


export { };