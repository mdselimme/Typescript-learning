


// generic contraints with keyof 

type Vehicle = {
    car: string,
    bike: string,
    ship: string
}



type Owner = 'car' | 'bike' | 'ship'

type Owner2 = keyof Vehicle;


const getStudentValue = <X, Y extends keyof X>(std: X, key: Y) => {
    return std[key];
}

const student = {
    name: "Selim",
    roll: 50
}

const studentRes = getStudentValue(student, "name");

console.log(studentRes)

export { }