"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kmhToPerSecond = function (val) {
    if (typeof val === "string") {
        var num_1 = val.split(" ")[0];
        var result = (parseInt(num_1) * 1000) / 100;
        console.log("Result is : ".concat(result, " cmh^-1"));
    }
    else if (typeof val === "number") {
        var result = (num * 1000) / 100;
        console.log("Result is : ".concat(result, " cmh^-1"));
    }
    else {
        console.log("Input is Not valid");
    }
};
kmhToPerSecond(5000);
