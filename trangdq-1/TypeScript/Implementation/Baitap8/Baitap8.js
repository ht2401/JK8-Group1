"use strict";
exports.__esModule = true;
exports.isPrime = exports.factorial = void 0;
// Bài 8: Tạo một module chia sẻ các hàm tiện ích như tính giai thừa, kiểm tra số nguyên tố.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
exports.factorial = factorial;
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
exports.isPrime = isPrime;
