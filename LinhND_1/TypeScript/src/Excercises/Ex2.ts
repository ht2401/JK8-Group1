export class Person {
    name: string = '';
    age: number = 0;
    email: string = '';
    constructor(name: string, age: number, email: string) { this.name = name;this.age =age;this.email = email; }
}

export function printPersonInfo(person: Person){
    return "Name: " + person.name + "\nAge: " + person.age.toString() + "\nEmail: " + person.email;
}