import { returnFirstElement } from "../src/Excercises/Ex3";

describe('returnFirstElement<T>()', () => {
    it('should return first number of array', () => {
        let arr : Array<number> = [1, 3, 2, 4, 6, 7];
        expect(returnFirstElement<number>(arr)).toEqual(1);
    });
    it('should return first string of array', () => {
        let arr : Array<String> = ["Nguyen", "Duy", "Linh", "Trang"];
        expect(returnFirstElement<String>(arr)).toEqual("Nguyen");
    });
});