export function calculateFactorial(value: number){
    let sum: number = 1;
    if(value <= 1){
        return 0;
    }
    for(let i = 1; i <= value; i++){
        sum *= i;
    }
    return sum;
}

export function isPrime(value: number) {
    if (value < 2) {
        return false;
    }
    for(let i: number = 2; i < Math.sqrt(value); i++){
        if(value % i == 0){
            return false;
        }
    }
    return true;
}