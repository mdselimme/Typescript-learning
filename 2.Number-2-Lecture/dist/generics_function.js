"use strict";
// function with generics 
Object.defineProperty(exports, "__esModule", { value: true });
const createAnArray = (params) => {
    return [params];
};
const createAnArrayGenerics = (params) => {
    return [params];
};
const createAnArrayGenericsTuple = (params, params2) => {
    return [params, params2];
};
const res = createAnArray("Hello");
const res2 = createAnArrayGenerics("Hello");
const res3 = createAnArrayGenerics(true);
const res4 = createAnArrayGenerics({ id: 125, name: "Selim" });
const res5 = createAnArrayGenericsTuple("SELIM", 56);
const res6 = createAnArrayGenericsTuple("SELIM", { name: "Hello", isAdmin: true });
console.log(res, res2, res3, res4, res5, res6);
