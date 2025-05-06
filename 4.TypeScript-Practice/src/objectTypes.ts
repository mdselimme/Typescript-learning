

// OBJECT TYPES IN TS 

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "CBR",
    year: 2001
}

// CHANGE VALUE 

car.type = "Suzuki"

// Optional Properties Types 

const student: {
    name: string,
    age: number,
    school?: string // ? for optional
} = {
    name: "Selim",
    age: 45
}

const student2: {
    name: string,
    age: number,
    school?: string // ? for optional
} = {
    name: "Selim",
    age: 45,
    school: "Saidur High School"
}


// INDEX SIGNATURES 

const studentNumber: { [index: string]: number } = {
    age: 20,
    roll: 20
};

studentNumber.money = 50;

console.log(studentNumber)