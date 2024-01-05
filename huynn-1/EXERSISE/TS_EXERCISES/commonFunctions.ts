// Hàm tính giai thừa
export const factorial = (n: number): number => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Hàm kiểm tra số nguyên tố
export const isPrime = (num: number): boolean =>{
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
