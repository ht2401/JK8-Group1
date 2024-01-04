// Hàm generic nhận vào mảng và trả về phần tử đầu tiên
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}
// Test 
const numbersArray: number[] = [10, 20, 30, 40, 50];
const firstArray = getFirstElement(numbersArray);
console.log("phần tử đầu tiên là :", firstArray);

