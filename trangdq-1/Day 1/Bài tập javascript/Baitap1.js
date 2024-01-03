// Bài 1. Viết hàm kiểm tra 1 số n có phải số nguyên dương hay là nguyên âm. 
//        Gợi ý hàm kiểm tra số nguyên isInteger
function isPositiveInt(x) { 
    if ((Number.isInteger(x)) || typeof x === 'bigint') { 
        if (x >= 0) {
            console.log(x + " là số nguyên dương.");
        }
        else {
            console.log(x + " là số nguyên âm.");
        }
    } else {
        console.log(x + " không phải số nguyên.");
    }
}
isPositiveInt(5)
isPositiveInt(-4)
isPositiveInt('8')
isPositiveInt(0.4)
isPositiveInt(BigInt('-7654567'))