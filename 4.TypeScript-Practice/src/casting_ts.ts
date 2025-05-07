

// CASTING IN TS 

const x: unknown = "Selim";
const y: unknown = 5;
const a = "Orange";


console.log((x as string).length)
console.log((<number>y))
console.log((a as unknown) as string)