


// utitlity types 

type Person = {
    name: string, 
    age: number,
    email?: string
    contactNo: string
}

// Pick 
type NamaAge = Pick<Person, "name" | "age">

// Omit 

type contactInfo = Omit<Person,"name" | "age">

// Required type 
type PersonRequired = Required<Person>

// Partial 
type PersonPartial = Partial<Person>


// ReadOnly 

const person : Person = {
    name: "XYZ",
    age:200,
    contactNo: '017'
}

type PersonReadOnly = Readonly<Person>

// Record Type 

type myObj = Record<string, number>

// const emptyObj: Record<string, unknown> = {}


const emp: Record<string, unknown> = {
    name:"lseim",
    roll: 5
}

export {}


























