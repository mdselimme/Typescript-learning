
type Something = { something: string };

//promise
const createPromise = (): Promise<Something> => {

    return new Promise<Something>((resolve, reject) => {
        const data: Something = { something: "I am something" };
        if (data) {
            resolve(data)
        } else {
            reject("Failed to load data")
        }
    })
};


const loadData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    console.log(data)
    return data;
}

loadData();


// fetch data by 

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: false
}

const getTodoById = async (): Promise<Todo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data)
    return data;
}

getTodoById()


















export { }