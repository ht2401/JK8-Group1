// Bài 3: viết hàm kiểm tra số nguyên tố:
// Định nghĩa một số là số nguyên tố tham khảo https://vi.wikipedia.org/wiki/S%E1%BB%91_nguy%C3%AAn_t%E1%BB%91

function isPrime(x) {
    if (x <= 1) return false
    if (typeof x === 'bigint') {
        x = valueOf(x)
    }
    if (Number.isInteger(x)) {
        for (i = 2; i <= Math.floor(Math.sqrt(x)); i++) {
            if (x % i === 0) {
                return false
            }
        }
        return true
    } else { return false }
}

console.log(isPrime(2.5))
console.log(isPrime(3))
console.log(isPrime(8))
