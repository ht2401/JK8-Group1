class SinhVien{
    constructor(name, age, gender, dateOfBirth){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
    }

    getInfo(){
        console.log("Ten: "+ this.name);
        console.log("Tuoi: "+ this.age);
        console.log("Gioi tinh: "+ this.gender);
        console.log("Ngay sinh: "+ this.dateOfBirth);
    }

    setName(name){
        this.name = name;
    }
}

let a = new SinhVien("Nguyen Van A","10","Nam","10/10/2002")
a.getInfo()