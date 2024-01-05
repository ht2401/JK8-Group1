// Bài 3: Viết một hàm generic nhận vào một mảng và trả về phần tử đầu tiên của mảng đó.
function getFirst<T>(array: T[]): T {
    if (array.length !== 0) {
        return array[0]
    }
    throw new Error("Mảng trống...")
}

console.log(getFirst([null, 1, "hello", undefined]))