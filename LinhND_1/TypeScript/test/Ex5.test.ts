import { Rectangle } from "../src/Excercises/Ex5";

describe('getRectangleArea', () => {
    it('should return rectangle area', () => {
        let rectangle: Rectangle = new Rectangle(3, 4);
        expect(rectangle.getArea()).toBe(12);
    })

    it('should return 0', () => {
        let rectangle: Rectangle = new Rectangle(-3, -4);
        expect(rectangle.getArea()).toBe(0);
    })
});