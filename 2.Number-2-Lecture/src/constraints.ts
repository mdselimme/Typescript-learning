

// CONSTRAINTS


const addToCourseStudent = <T extends { id: number, name: string, devType: string }>(student: T) => {
    const course = "NLP & Machine Learning Course";
    return {
        ...student,
        course
    }
};

interface StudentData {
    id: number
    name: string,
    email: string,
    devType: string
    enrollent: boolean

}

const student1 = addToCourseStudent({ id: 1, name: "Abdul", email: "Amin", devType: "FullStack", enrollent: true });
const student2 = addToCourseStudent({ id: 1, name: "Abdul", email: "Amin", devType: "FullStack", enrollent: true });

console.log(student1)















export { }