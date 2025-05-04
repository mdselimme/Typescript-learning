"use strict";
// CONSTRAINTS
Object.defineProperty(exports, "__esModule", { value: true });
const addToCourseStudent = (student) => {
    const course = "NLP & Machine Learning Course";
    return Object.assign(Object.assign({}, student), { course });
};
const student1 = addToCourseStudent({ id: 1, name: "Abdul", email: "Amin", devType: "FullStack", enrollent: true });
console.log(student1);
