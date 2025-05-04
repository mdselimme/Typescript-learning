"use strict";
var num = 50;
console.log(num);
var poorUser = {
    name: "Selim",
    balance: 0,
    addBalance: function (balance) {
        return "My new balance is : ".concat(this.balance + balance);
    }
};
