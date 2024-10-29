type Tperson = {
    username:string;
    age: number;
    id: number;
};

const person: Tperson ={
    username: 'John',
    age: 25,
    id:1,
};

function greetPerson({ username}: Tperson){
    console.log ('Hello ${username}');
}

const {id,age} = person;