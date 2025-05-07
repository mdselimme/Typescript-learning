


// FUNCTION IN TYPESCRIPT 

// RETURN TYPE 

function getLevel(): number {
    return 5;
}

console.log(getLevel())

// VOID RETURN TYPE 

function noReturn(): void {
    console.log("No return type called void type")
}

noReturn()

// parameter funtion type 

function addition(x: number, y: number) {
    return x + y;
}

const additionResult = addition(45, 65);
console.log("Addition result is : ", additionResult)

// optional parameter method 

function optionalParameterAddtion(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

const optionalParameterAddtionResult = optionalParameterAddtion(56, 10);
const optionalParameterAddtionResult2 = optionalParameterAddtion(56, 10, 56);
console.log(optionalParameterAddtionResult)
console.log(optionalParameterAddtionResult2)

// DEFAULT PARAMETERS 
function defaultParameterAddtion(a: number, b: number, c: number = 50) {
    return a + b + (c || 0);
}

const defaultParameterAddtionResult = defaultParameterAddtion(56, 10);
const defaultParameterAddtionResult2 = defaultParameterAddtion(56, 10, 56);
console.log(defaultParameterAddtionResult)
console.log(defaultParameterAddtionResult2);

// Named Parameter in TypeScript 

const namdParameterInTs = ({ numberOne, numberTwo }: { numberOne: number, numberTwo: number }) => {
    return numberOne + numberTwo;
}

const namedParameterResult = namdParameterInTs({ numberOne: 200, numberTwo: 30 });
console.log(namedParameterResult)


// Rest Parameters In Ts Function 
const restParameterAddition = (a: number, b: number, ...values: number[]) => {
    console.log(values)
    return a + b + values.reduce((val, currVal) => val + currVal, 0);
}

console.log(restParameterAddition(20, 10, 10, 2, 5, 3));

// TYPE ALIASES IN FUNCTION 

type funcMethod = (a: number, v: number) => number;

const multiplyNumber: funcMethod = (a, v) => {
    return a * v;
}

console.log(multiplyNumber(5, 6))

