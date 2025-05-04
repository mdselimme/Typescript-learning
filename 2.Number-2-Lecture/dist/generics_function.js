"use strict";
// function with generics 
Object.defineProperty(exports, "__esModule", { value: true });
const createAnArray = (params) => {
    return [params];
};
const createAnArrayGenerics = (params) => {
    return [params];
};
const res = createAnArray("Hello");
const res2 = createAnArrayGenerics("Hello");
const res3 = createAnArrayGenerics(true);
const res4 = createAnArrayGenerics({ id: 125, name: "Selim" });
