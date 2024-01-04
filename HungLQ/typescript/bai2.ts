interface Person{
    name: string;
    age: number;
    email: string;
}

function printInfo(person: Person){
    console.log(`${person.name} ${person.age} ${person.email}`);
}

let user:Person = {name:'hung',age:18,email:'hung@gmail.com'};
printInfo(user);
