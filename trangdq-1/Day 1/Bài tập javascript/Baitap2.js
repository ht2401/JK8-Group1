// Bài 2. Viết hàm giải phương trình bậc nhất ax + b = 0
function findX(a,b) {
    if (a === 0) {
        if (b === 0) {
            return "R"
        } else {
            return "∅"
        }
    } else {
        return -b/a
    }
}
console.log("-x+2=0 -> x=" + findX(-1,2))
console.log("0x+2=0 -> x=" + findX(0,2));
console.log("0x+0=0 -> x=" + findX(0,0));
console.log("-0.5x+2=0 -> x=" + findX(-0.5,2));
console.log("0.5x+2=0 -> x=" + findX(0.5,2));
console.log("-x=0 -> x=" + findX(-1,0));