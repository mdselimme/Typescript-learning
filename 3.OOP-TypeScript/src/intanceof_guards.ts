


// INTANCE OF GUARDS 

class StudentAndTeacher {
    constructor(public name: string, public age: number) { }
    haveClass(status: string) {
        console.log(`You have class. ${status}`)
    }
}

class Student extends StudentAndTeacher {
    constructor(name: string, age: number) {
        super(name, age);
    }
    getStudent() {
        console.log("Yes I am a Student");
    }
};

class Teacher extends StudentAndTeacher {
    constructor(name: string, age: number) {
        super(name, age)
    }
    getTeacher(status: string) {
        console.log(`Get Routine: ${status}`)
    }
}

const getStudent = (std: StudentAndTeacher): std is Student => {
    return std instanceof Student;
}
const getTeacher = (std: StudentAndTeacher): std is Teacher => {
    return std instanceof Teacher;
}

const getAstaTus = (status: StudentAndTeacher) => {
    if (getStudent(status)) {
        status.getStudent();
    }
    else if (getTeacher(status)) {
        status.getTeacher("Yes")
    } else {
        status.haveClass("Yes")
    }
}

const student = new Student("Selim", 20);
const teacher = new Teacher("Akbar", 50);

getAstaTus(student)







export { }