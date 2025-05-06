"use strict";
// INTANCE OF GUARDS 
Object.defineProperty(exports, "__esModule", { value: true });
class StudentAndTeacher {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    haveClass(status) {
        console.log(`You have class. ${status}`);
    }
}
class Student extends StudentAndTeacher {
    constructor(name, age) {
        super(name, age);
    }
    getStudent() {
        console.log("Yes I am a Student");
    }
}
;
class Teacher extends StudentAndTeacher {
    constructor(name, age) {
        super(name, age);
    }
    getTeacher(status) {
        console.log(`Get Routine: ${status}`);
    }
}
const getStudent = (std) => {
    return std instanceof Student;
};
const getTeacher = (std) => {
    return std instanceof Teacher;
};
const getAstaTus = (status) => {
    if (getStudent(status)) {
        status.getStudent();
    }
    else if (getTeacher(status)) {
        status.getTeacher("Yes");
    }
    else {
        status.haveClass("Yes");
    }
};
const student = new Student("Selim", 20);
const teacher = new Teacher("Akbar", 50);
getAstaTus(student);
