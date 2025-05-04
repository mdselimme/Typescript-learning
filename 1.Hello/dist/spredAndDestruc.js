"use strict";
// spread operator
//rest operator
//destructuring
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
//learn spread operator
var bros1 = ["Mir", "Firoz", "Rahat"];
var bros2 = ["Selim", "Sifat", "Nahid"];
bros1.push.apply(bros1, bros2);
console.log(bros1);
var mentors = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan'
};
var mentors2 = {
    prisma: 'Firoz',
    nex: 'Tonmoy',
    cloud: 'Nahid'
};
var mentorList = __assign(__assign({}, mentors), mentors2);
console.log(mentorList);
// rest operator 
var greetFriends = function () {
    var frnd = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        frnd[_i] = arguments[_i];
    }
    frnd.forEach(function (e) {
        console.log(console.log("Hi ! ".concat(e)));
    });
};
greetFriends("Abul", "Babul", "Shabul");
