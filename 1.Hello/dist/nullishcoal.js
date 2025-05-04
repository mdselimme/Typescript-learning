"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// Use nullishing coalescing operator for null and undefined
var isAuth = null;
var result1 = isAuth !== null && isAuth !== void 0 ? isAuth : "Guest";
var result2 = isAuth ? isAuth : "Guest";
console.log({ result1: result1 }, { result2: result2 });
var userDt = {
    name: "Selim",
    userAddress: {
        city: "Dh",
        road: "akg",
        presentAdd: "mym"
    }
};
var permanentAdd = (_a = userDt.userAddress.permanentAdd) !== null && _a !== void 0 ? _a : "No permanent address found";
console.log({ permanentAdd: permanentAdd });
