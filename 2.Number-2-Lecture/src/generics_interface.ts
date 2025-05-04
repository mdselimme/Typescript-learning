
//interface with generics

interface Developer<T, X = null> {
    name: string,
    computer: {
        brand:string,
        model: string,
        releaseYear: number
    },
    smartWatch: T,
    bikeHas?: X
}

type poorSmart = {
    walkTrack: boolean,
        sleepTrack: boolean,
        batteryTime: number,
        color: string
}

const poorDeveloper: Developer<poorSmart, null> = {
    name: "Selim",
    computer: {
        brand: "Samsung",
        model: "F7 Pro",
        releaseYear:2017
    },
    smartWatch:{
        walkTrack: true,
        sleepTrack: true,
        batteryTime: 48,
        color: "blue"
    }
};

interface richSmart {
batteryTime: number,
    color: string
}

interface BikeHas {
    model: string, price: number
}

const richDeveloper: Developer<richSmart, BikeHas> = {
    name: "Usuf",
    computer: {
        brand: "Apple",
        model: "5 s",
        releaseYear:2022
    },
    smartWatch:{
        batteryTime: 48,
        color: "blue"
    },
    bikeHas: {
        model:"Yamaha",
        price:4500
    }
};










export {}