"use strict";
// type assertion 
Object.defineProperty(exports, "__esModule", { value: true });
let data;
data = 50;
data = "Hello";
const kgToGm = (value) => {
    if (typeof value === "string") {
        return `Number is ${value}`;
    }
    if (typeof value === "number") {
        return value * value;
    }
};
const res1 = kgToGm("Ami kutub kohta");
const res2 = kgToGm(7);
console.log(res1, res2);
