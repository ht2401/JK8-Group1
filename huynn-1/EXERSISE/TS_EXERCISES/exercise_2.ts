interface Person {
    name: string;
    age: number;
    email: string;
}

const printUserInfo = (person: Person): void => {
    console.log(`Tên: ${person.name}`);
    console.log(`Tuổi: ${person.age}`);
    console.log(`Email: ${person.email}`);
}

const user: Person = {
    name: "Huynn",
    age: 25,
    email: "Huy123@gmail.com",
};

printUserInfo(user);
