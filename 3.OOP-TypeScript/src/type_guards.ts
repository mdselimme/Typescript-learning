

// TYPE GUARD IN TS 

type NumberString = number | string;

const addData = (num1: NumberString, num2: NumberString): NumberString => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString();
    }
}
const res = addData("5", 56)
console.log(res)

// In Guards 

type General = {
    name: string
}
type Special = {
    name: string
    role: 'admin'
}

const getUser = (val: General | Special) => {
    if ('role' in val) {
        console.log(`My name is ${val.name} and my role is ${val.role}`);
    } else {
        console.log(`My name is ${val.name}`);
    }
};

const result = getUser({ name: "Selim", role: 'admin' });

console.log()










export { }