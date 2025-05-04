export {}

// unknown types 
const kmhToPerSecond = (val:unknown) =>{
    if(typeof val === "string"){
        const num = val.split(" ")[0];
        const result = (parseInt(num) * 1000) / 100;
        console.log(`Result is : ${result} cmh^-1`);
    }else if(typeof val === "number"){
        const result = (val * 1000) / 100;
        console.log(`Result is : ${result} cmh^-1`);
    }else{
        console.log("Input is Not valid");
    }
};

kmhToPerSecond("5000 kmh^-1");

// never types

const throwError = (value:string):never =>{
    throw new Error(value);
}

throwError("Mera Code Geya")