"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// object destructuring 
var user = {
    id: 345,
    name: {
        firstName: "Selim",
        middleName: "Akand",
        lastName: "Sultan",
    },
    contactNo: '01714025686',
    address: 'Kenya'
};
var contactNo = user.contactNo, first = user.name.firstName;
// array destructuring 
var arr = ["mahbub", "akib", "sakib", "bekub", "usuf", "hatim"];
var bestie = arr[2], rest = arr.slice(3);
console.log(rest);
