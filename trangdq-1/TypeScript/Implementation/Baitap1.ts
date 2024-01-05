// Bài 1: Tạo một hàm TypeScript nhận vào một mảng các số nguyên và trả về tổng của chúng.
function calcSum(array: number[]): number {
    return array.reduce((x, y) => x + y);
}

console.log(calcSum([1,2,3,4,6,7,8,9]))