//Ex1
function calculateSum(e){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    console.log(a + b);
}

//Ex2
class SinhVien{
    constructor(fullName, age, gender, birthday){
        this.fullName = fullName;
        this.age = age;
        this.gender = gender;
        this.birthday = birthday;
    }
    getInfo(){
        console.log('Thong tin sinh vien: ');
        console.log('Ho ten: ' + this.fullName);
        console.log('Tuoi: ' + this.age);
        console.log('Gioi tinh: ' + this.gender);
        console.log('Ngay sinh: ' + this.birthday);
    }

    setName(name){
        this.name = name;
    }

}

sv = new SinhVien("Nguyen Linh", 24, "Nam", new Date('1999-08-01'));
sv.getInfo();