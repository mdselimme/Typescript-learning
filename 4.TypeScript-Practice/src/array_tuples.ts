

// Typed Array 


const studentTuple: [string, number, boolean] = ["Selim", 56, true];

let studentTuple2: [string, number, boolean];

studentTuple2 = ['yousuf', 45, false];

// Readonly Tuple 

// let doctor: [number, string, number];

// doctor = [45, 'Selim', 45]

// doctor.push("Savio");

// console.log(doctor)

const doctor: readonly [number, string, number] = [45, 'Alfi', 45];

// doctor.push() //for readonly can't change the value

// Named Tuples 

const car: [model: string, price: number] = ['Totyo', 456565];

// Destructuring Tuples

const animal: [string, boolean] = ["Cow", true];

const [animalName, health] = animal;
console.log(
    animalName, health
)

export { }