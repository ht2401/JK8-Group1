function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const array1 = [1, 2, 3, 4, 5];
console.log("Sum of array1:", sumArray(array1));
