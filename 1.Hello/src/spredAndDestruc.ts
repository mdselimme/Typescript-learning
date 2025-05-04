

// spread operator
//rest operator
//destructuring


//learn spread operator

const bros1: string[] = ["Mir", "Firoz", "Rahat" ];
const bros2: string[] = ["Selim", "Sifat", "Nahid" ];

bros1.push(...bros2);

console.log(bros1);

const mentors = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan'
};

const mentors2 = {
    prisma: 'Firoz',
    nex: 'Tonmoy',
    cloud: 'Nahid'
}

const mentorList = {...mentors,...mentors2}

console.log(mentorList)

// rest operator 

const greetFriends = (...frnd: string[])=>{
    frnd.forEach((e)=>{
        console.log(console.log(`Hi ! ${e}`))
    })
}

greetFriends("Abul","Babul", "Shabul");


export {}