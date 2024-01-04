// Định nghĩa interface Person
interface Person {
    name: string;
    age: number;
    email: string;
}
// Hàm nhận 
function printPersonInfo(person: Person): void {
    console.log(`Name: ${person.name}, Age: ${person.age}, Email: ${person.email}`);
}
// Tạo đối tượng 
const person1: Person = {
    name: "hathangttt",
    age: 25,
    email: "ttt@gmail.com",
};
// Gọi hàm để in ra thông tin 
printPersonInfo(person1);
