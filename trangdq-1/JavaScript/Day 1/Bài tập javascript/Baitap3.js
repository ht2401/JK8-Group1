function isSquareNumber(x) {
    if (x > 0 && Math.pow(Math.sqrt(x), 2) === x) {
        return true
    } else {
        return false
    }
}

for (i = 0; i <= 5; i++) {
    if (isSquareNumber(i)) {
        console.log(i + " là số chính phương.");
    } else {
        console.log(i + " không là số chính phương.");
    }
}