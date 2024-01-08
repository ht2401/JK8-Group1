import { factorial, isPrime } from './module';

// Sử dụng các hàm
const resultFactorial = factorial(5);
console.log(`Factorial of 5 is: ${resultFactorial}`);

const numToCheck = 13;
const isPrimeResult = isPrime(numToCheck);
console.log(`${numToCheck} is prime: ${isPrimeResult}`);