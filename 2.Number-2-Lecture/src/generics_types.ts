

// generic type 

// general method 
const rollNumber: number[] = [1,2,3,4];
const friendsName: string[] = ["Selim","Mahabub","ShahAlam"];
const boolArray: boolean[] = [true, false, true];



// Generics Method 
const rollNumber2: Array<number> = [1,2,3,4];
const friendsName2: Array<string> = ["Selim","Mahabub","ShahAlam"];
const boolArray2: Array<boolean> = [true, false, true];


// dynamic generics

type GenericsArray<T> = Array<T>;
const yousuf: GenericsArray<number> = [56,4,56,4,5]

/* const user : GenericsArray<object> = [
    {
        name:"Selim",
        age:100
    },
    {
        name:"Alif",
        age: "562"
    }
] */
const user : GenericsArray<{name:string, age:number}> = [
    {
        name:"Selim",
        age:100
    },
    {
        name:"Alif",
        age: 56
    }
];

// generic tuple 

type GeneRicTuple<X, Y> = [X, Y]

// const manush: [string, string] = ['Mrx', "Mr y"]
const manush:GeneRicTuple<string, string>  = ['Mrx', "Mr y"]
const manush2:GeneRicTuple<number,{name:string, isAdmin: boolean} >  = [1000, {name:"Selim", isAdmin:true}]





export {}