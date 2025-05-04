
// object destructuring 
const user = {
    id:345,
    name: {
        firstName: "Selim",
        middleName: "Akand",
        lastName: "Sultan",
    },
    contactNo:'01714025686',
    address: 'Kenya'
};

const {contactNo, name: {firstName: first}} = user;

// array destructuring 

const arr = ["mahbub", "akib", "sakib", "bekub","usuf","hatim"];

const [, , bestie, ...rest] = arr;

console.log(rest)

export {}