
// MAPEED TYPES OF TS 

const arrOfNumber : number[] = [1,2,3];

const arrOfString : string[] = ["1", "2", "3"];

const arrOfStringTwo : string[] = arrOfNumber.map((number)=> number.toString());

console.log(arrOfStringTwo);


// Mapes in ts 

type AreaNumber = {
    height: number;
    width: number;
}

/*type AreaOfString = {
    height: string;
    width: number;
}*/

type AreaOfString = {
    [key in 'width' | 'height' | 'color']: string
}

type AreaOfStringByMap = {
    [key in keyof AreaNumber] : boolean
}

// Generics in type metod ts 

type User = {
    name: string,
    roll: number
};


type UsersData<T> = {
    [key in keyof T]: T[key]
};

const users1: UsersData<User> = {
    name: "Selim",
    roll: 45
}

























export {}