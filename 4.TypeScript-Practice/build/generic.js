"use strict";
// function generics 
Object.defineProperty(exports, "__esModule", { value: true });
function creatPair(v1, v2) {
    return [v1, v2];
}
const result = creatPair('hello', 56);
console.log(result[0]);
// Generics in class 
class Student {
    constructor(name) {
        this.name = name;
    }
    ;
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toStrData() {
        return `${this.name}: ${this._value}`;
    }
}
const stuResult = new Student('Selim');
stuResult.setValue(10);
console.log(stuResult.toStrData());
const wrappedValue = { value: 10 };
const wrapInterface = { value: "4" };
// Default value in class generics 
class Student2 {
    constructor(name) {
        this.name = name;
    }
    ;
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toStrData() {
        return `${this.name}: ${this._value}`;
    }
}
const stuResult2 = new Student2('Selim');
stuResult2.setValue("47");
console.log(stuResult2.toStrData());
// extends method in generics 
const funcExtendGenericsMethod = (val1, val2) => {
    console.log(`creating pair: v1 = ${val1}, v2 = ${val2}`);
    return [val1, val2];
};
const resExt = funcExtendGenericsMethod(true, 56);
console.log(resExt);
