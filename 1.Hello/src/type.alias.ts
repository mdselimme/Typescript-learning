

type Student = {
    name: string,
    gender: string,
    mobile?: string,
    age: number,
    address: string
}

// type alias
const student1 : Student = {
    name:"Selim",
    gender: "Male",
    age:50,
    address: "Dhk"
};

const student2 : Student = {
    name:"Hasina",
    gender: "Female",
    mobile: "01517784594",
    age:1580,
    address: "India"
};

type Username = string
type isAdmin = boolean

const userName : Username = "mdselimme"
const IsAdmin: isAdmin = true

// Type alias in function 

type Add = (num1: number, num2: number) => number;

const sum : Add = (num1, num2)=> num1 + num2;











export {}