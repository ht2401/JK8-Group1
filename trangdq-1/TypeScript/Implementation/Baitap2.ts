// Bài 2: Định nghĩa một interface Person có các trường name (string), age (number), 
// và email (string). Sau đó, tạo một hàm nhận vào một đối tượng thuộc interface Person 
// và in ra thông tin của người đó.

interface Person {
    name: string;
    age: number;
    email: string;
}

function printInfo(person: Person): void { 
    console.log(`${person.name} - ${person.age} tuổi, email: ${person.email}`);
}

printInfo({
    name: "Esther Seirenia",
    age: 14,
    email: "esther@gmail.com"
})