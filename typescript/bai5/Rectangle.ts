class Rectangle {
    private length: number;
    private width: number;

    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }

    calculateArea(): number {
        return this.length * this.width;
    }
}

export default Rectangle;