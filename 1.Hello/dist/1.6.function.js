"use strict";
// typescript function 
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
var addNum = function (num1, num2) { return num1 + num2; };
// object -> function -> method 
var richUser = {
    name: "Selim",
    balance: 10000,
    addBalance: function (balance) {
        return "My new balance is ".concat(this.balance + balance);
    }
};
var arr = [1, 4, 10];
var newArray = arr.map(function (n) { return n * n; });
