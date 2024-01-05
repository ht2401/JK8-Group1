// Bài 2: tạo class SinhVien có các thuộc tính:
// tên, tuổi, giới tính, ngày tháng năm sinh
// có các method:
// getInfo(); in ra thông tin sinh viên
// setName(name); đổi một tên mới cho đối tượng này
// tạo đối tượng sinh viên từ class bên trên.
// in thông tin của sinh viên vừa tạo ra console.

class SinhVien {
    constructor(name, age, gender, dob) {
        this.name = name
        this.age = age
        this.gender = gender
        this.dob = dob

        this.getInfo = this.getInfo.bind(this)
        this.setName = this.setName.bind(this)
    }
    getInfo() {
        console.log("Sinh viên " + this.name + ", tuổi " + this.age + ", giới tính " + this.gender + ", sinh ngày " + this.dob);
    }

    setName(newName) {
        this.name = newName
    }

}

var sinhvien = new SinhVien("Lemonade", 18, "nữ", new Date("2023-11-24").toLocaleDateString())
sinhvien.getInfo()