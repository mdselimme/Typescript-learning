


// type assertion 

let data : any;

data = 50 as number

data = "Hello" as string


const kgToGm = (value: string | number): (number | string | undefined) =>{
    if(typeof value === "string"){
        return `Number is ${value}`
    }
    if(typeof value === "number"){
        return value * value;
    }
};

const res1 = kgToGm("Ami kutub kohta") as string
const res2 = kgToGm(7) as number


console.log(res1, res2)


export {}