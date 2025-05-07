

// INTERFACES IN TS 

interface Student {
    name: string
    roll: number
    division: string
}


const student: Student = {
    name: "Shaha",
    roll: 45,
    division: "Huminities"
}

// EXTENDS METHOD IN INTERFACE 

interface StudentWithClassDetails extends Student {
    className: number,
    gender: "male" | "female"
};


const studentDetails: StudentWithClassDetails = {
    name: "Kafia",
    roll: 45,
    division: "science",
    className: 10,
    gender: "female"
}

export { }