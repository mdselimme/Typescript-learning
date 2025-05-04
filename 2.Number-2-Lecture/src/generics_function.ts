

// function with generics 

const createAnArray = (params: string): string[] => {
    return [params]
}

const createAnArrayGenerics = <T>(params: T): T[] =>{
    return [params]
}
const createAnArrayGenericsTuple = <T, X>(params: T, params2: X): [T, X]  =>{
    return [params, params2]
}

interface User {
    id:number,
    name: string
}

const res = createAnArray("Hello")
const res2 = createAnArrayGenerics<string>("Hello")
const res3 = createAnArrayGenerics<boolean>(true)
const res4 = createAnArrayGenerics<User>({id:125,name:"Selim"})
const res5 = createAnArrayGenericsTuple("SELIM", 56)



export {}