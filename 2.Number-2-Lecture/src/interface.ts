

// interface 

// type method 

type User = {
    name: string
    age: number
}

type rollNumber = number

type userWithRoleNumber = User & { role: string}

// interface method 
interface User2 {
    name: string
    age: number
}

interface userWithRole2 extends User2 {
    role: string
}

const user: User = {
    name:"Habu",
    age:25
};

const userWithRole: userWithRoleNumber = {
    name: "Selm",
    age: 56,
    role: "Admin"
}

const userWithRole2: userWithRole2 = {
    name: "Selim",
    age:56,
    role: "Admin"
}

const user2: User2 = {
    name:"Habu",
    age:25
};

// js = Array, function --> object,

// Array 
type Roll = number[]

const roll: Roll = [1,23]

interface Roll2 {
    [index: number] : number
}
const roll2: Roll2 = [1,23]

// Function 
type Add = (num: number, num2:number)=> number
interface Add2 {
    (num:number, num2: number) : number
}

const sum : Add = (num, num2) => num + num2;
const sum2 : Add2 = (num, num2) => num + num2;



export {}