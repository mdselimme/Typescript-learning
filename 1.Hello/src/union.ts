

// Union type 

type JuniorDeveloper = "Fakibaj" | "Karak Developer"
type ExperDeveloper = "Fakibaj" | "Expert Developer"

const developer : JuniorDeveloper = "Fakibaj"
const developer2 : ExperDeveloper = "Expert Developer"


type Student = {
    course: string[],
    role: "Admin"
}

type Student2 = {
    course: string[]
    color:string[]
}


type AllStudent = Student & Student2;

const student: AllStudent = {
    course: ["Java", "C"],
    role: "Admin",
    color:["Blue"]
}













export {}