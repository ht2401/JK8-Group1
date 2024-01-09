import { isPrime, calculateFactorial } from "../src/Excercises/Ex8"; 

describe('Calculate number factorial', () => {
    it("should return number factorial", () => {
        let value = 4;
        expect(calculateFactorial(value)).toBe(24);
    })
    it("should return number factorial", () => {
        let value = 1;
        expect(calculateFactorial(value)).toBe(0);
    })
})

describe('Check if number is prime', () => {
    it("should return true", () => {
        let value: number = 2;
        expect(isPrime(value)).toBe(true);
    })
    it("should return true", () => {
        let value: number = 5;
        expect(isPrime(value)).toBe(true);
    })
    it("should return false", () => {
        let value: number = 1;
        expect(isPrime(value)).toBe(false);
    })
    it("should return false", () => {
        let value: number = 6;
        expect(isPrime(value)).toBe(false);
    })
});