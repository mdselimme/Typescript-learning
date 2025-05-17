"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
// Required Types 
const student = {
    id: 12,
    name: "Selim",
    roll: 45
};
console.log(student);
// Record Types 
//Quick Object defined
const student2 = {
    "Alice": 21,
    "Bob": 25
};
console.log(student2);
;
// omit removes key from an object type 
const car1 = {
    model: "Tyo",
    country: "Japan"
};
// Pick 
const car2 = {
    model: 'toto'
};
console.log(car1);
console.log(car2);
const valueOfType = true;
const point = {
    x: 10,
    y: 10
};
console.log(point);
const watch = {
    name: 'Samsung',
    price: 56,
    model: 'j8 prio'
};
// [
//     p: { x: string, y: number }
// ]
const fuelType = {
    x: 'selim',
    y: 20
};
console.log(fuelType);
