"use strict";
// Typed Array 
Object.defineProperty(exports, "__esModule", { value: true });
const studentTuple = ["Selim", 56, true];
let studentTuple2;
studentTuple2 = ['yousuf', 45, false];
// Readonly Tuple 
// let doctor: [number, string, number];
// doctor = [45, 'Selim', 45]
// doctor.push("Savio");
// console.log(doctor)
const doctor = [45, 'Alfi', 45];
// doctor.push() //for readonly can't change the value
// Named Tuples 
const car = ['Totyo', 456565];
// Destructuring Tuples
const animal = ["Cow", true];
const [animalName, health] = animal;
console.log(animalName, health);
