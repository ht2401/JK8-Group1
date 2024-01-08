import {calculateSum} from '../src/Excercises/Ex1';

describe('calculateSum()', () => {
    it('should return 0', () => {
        let arr: Array<number> = [0, 0, 0, 0];
        expect(calculateSum(arr)).toBe(0);
    })

    it('should return 10', () => {
        let arr: Array<number> = [1, 2, 3, 4];
        expect(calculateSum(arr)).toBe(10);
    })
})