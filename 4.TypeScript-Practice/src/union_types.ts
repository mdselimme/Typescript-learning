


// UNION TYPES IN TYPESCRIPT 

const errorMessageCode = (message: string | number) => {
    console.log(`Error Message Code Is ${message}`)
}

errorMessageCode("404")
errorMessageCode(404)

function convertMessage(message: string | number): string | number | undefined {
    if (typeof message === "string") {
        return message.toUpperCase();
    }
    else if (typeof message === "number") {
        return message * message
    } else {
        return ("Operation Failed")
    }
}

const result = convertMessage("Hello")
const result2 = convertMessage(10)

console.log(result)
console.log(result2)