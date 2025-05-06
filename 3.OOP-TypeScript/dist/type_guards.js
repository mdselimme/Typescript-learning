"use strict";
// TYPE GUARD IN TS 
Object.defineProperty(exports, "__esModule", { value: true });
const addData = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
};
const res = addData("5", 56);
console.log(res);
const getUser = (val) => {
    if ('role' in val) {
        console.log(`My name is ${val.name} and my role is ${val.role}`);
    }
    else {
        console.log(`My name is ${val.name}`);
    }
};
const result = getUser({ name: "Selim", role: 'admin' });
console.log();
