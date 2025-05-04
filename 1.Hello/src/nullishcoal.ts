
// Use nullishing coalescing operator for null and undefined
const isAuth = null


const result1 = isAuth ?? "Guest"
const result2 = isAuth ? isAuth : "Guest"
console.log({result1}, {result2})

type UserData = {
    name: string
    userAddress: {
        city: string
        road:string
        presentAdd: string
        permanentAdd?:string
    }
}

const userDt: UserData = {
    name:"Selim",
    userAddress: {
        city: "Dh",
        road: "akg",
        presentAdd:"mym"
    }
}

const permanentAdd = userDt.userAddress.permanentAdd ?? "No permanent address found"

console.log({permanentAdd})

export {}
