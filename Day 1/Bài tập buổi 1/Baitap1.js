// Viết ctr cho phép nhập vào thông tin cá nhân bao gồm:
// Họ tên, tuổi, số điện thoại và sau đó in các thông tin này ra trên màn hình console
function inputPersonalInfo() {
    var name = prompt("Nhập họ tên: ")
    var age = prompt("Nhập tuổi:")
    var phone = prompt("Nhập số điện thoại: ")

    console.log("Họ tên: " + name)
    console.log("Tuổi: " + age)
    console.log("SĐT: " + phone)
}
inputPersonalInfo()