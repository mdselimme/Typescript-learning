

//nullable types

const searchName = (value: string | null)=>{
    if(value){
        console.log("Searching")
    }else{
        console.log("Nothing to Search")
    }
};

searchName(null)









export {}