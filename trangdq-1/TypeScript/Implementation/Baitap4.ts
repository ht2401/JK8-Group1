// Bài 4: Định nghĩa một enum Color với các giá trị là RED, GREEN, và BLUE. 
// Tạo một hàm nhận vào một giá trị của enum và in ra tên của màu đó.
enum Color {
    RED = "Màu đỏ",
    GREEN = "Màu vàng",
    BLUE = "Màu xanh"
}

function getName(color: Color) {
    console.log(color);
}

getName(Color.RED)