"use strict";
// generic contraints with keyof 
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentValue = (std, key) => {
    return std[key];
};
const student = {
    name: "Selim",
    roll: 50
};
const studentRes = getStudentValue(student, "name");
console.log(studentRes);
