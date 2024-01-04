enum Color {
    RED = "Red",
    GREEN = "Green",
    BLUE = "Blue",
}
// Hàm nhận và in ra tên của màu
function inMau(color: Color): void {
    console.log(`Color: ${color}`);
}
// Test 
const chonMau: Color = Color.GREEN;
inMau(chonMau);
