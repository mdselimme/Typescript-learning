

// Keyof method 

interface Student {
    name: string
    age: number
}

function printStudentAge(student: Student, age: keyof Student) {
    console.log(student, student[age])
}

const student: Student = {
    name: 'Selim',
    age: 25
}

console.log(printStudentAge(student, 'age'));

// keyof Index Signatures 

type StringMap = { [key: string]: unknown };

function creatingStringPair(property: keyof StringMap, value: string): StringMap {
    return { [property]: value }
}

const res = creatingStringPair('name', 'selim');

console.log(res)

type Point = { x: number, y: number };

type P = keyof Point;

const sum: P = 'x';

// Constraint using keyof method 

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
}

const user = {
    name: 'Selim',
    roll: 45,
    age: 20
}

const resu = getPropertyValue(user, 'name');
console.log(resu);


export { }