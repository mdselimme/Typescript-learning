"use strict";
// OBJECT TYPES IN TS 
const car = {
    type: "Toyota",
    model: "CBR",
    year: 2001
};
// CHANGE VALUE 
car.type = "Suzuki";
// Optional Properties Types 
const student = {
    name: "Selim",
    age: 45
};
const student2 = {
    name: "Selim",
    age: 45,
    school: "Saidur High School"
};
// INDEX SIGNATURES 
const studentNumber = {
    age: 20,
    roll: 20
};
studentNumber.money = 50;
console.log(studentNumber);
