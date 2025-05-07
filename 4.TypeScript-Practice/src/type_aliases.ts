

export { }

type StudentName = string;
type StudentRoll = number;
type studentDivison = string;

type Student = {
    name: StudentName,
    roll: StudentRoll,
    division: studentDivison
}

const studentName: StudentName = "Akbar";
const studentRoll: StudentRoll = 25;
const studentDivision: studentDivison = "Science";


const student: Student = {
    name: studentName,
    roll: studentRoll,
    division: studentDivision
}


// make it simple 

type Student2 = {
    name: string
    roll: number
    division: string
}

const student2: Student2 = {
    name: "Selim",
    roll: 25,
    division: "Commerce"
}