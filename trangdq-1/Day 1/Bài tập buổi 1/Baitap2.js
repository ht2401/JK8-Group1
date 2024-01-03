// Viết chương trình cho phép nhập vào chiều cao chiều dài và chiều rộng của hình hộp chữ nhật, 
// sau đó tính và in ra diện tích toàn phần (6 mặt) của hình hộp chữ nhật này.
function calcAreaOfRectangularBox() {
    var length = prompt("Nhập chiều dài: ")
    var width = prompt("Nhập chiều rộng:")
    var height = prompt("Nhập chiều cao: ")

    console.log("Diện tích toàn phần hình hộp chữ nhật: " + (2*(length+width)*height + 2*length*width));

}
calcAreaOfRectangularBox()