// Bài 6: Viết một decorator để log thông tin mỗi khi một phương thức của một lớp được gọi.

class Square {
    edge: number
    constructor(edge: number) {
        this.edge = edge
        this.printInfo = this.printInfo.bind(this)
    }

    calcArea(): number {
        return this.edge * this.edge
    }

    calcPerimeter(): number {
        return this.edge * 4
    }

    printInfo(): void {
        console.log(`Hình vuông cạnh ${this.edge}cm có chu vi ${this.calcPerimeter()}cm và diện tích ${this.calcArea()}cm2`);
    }
}

class SquareDecorator extends Square {
    constructor(square: Square) {
        super(square.edge);
        console.log(`>> Constructor khởi tạo Square cạnh ${square.edge}`);
    }

    calcArea(): number {
        console.log(">> Method calcArea() đang tính diện tích hình vuông...");
        return super.calcArea()
    }

    calcPerimeter(): number {
        console.log(">> Method calcPerimeter() đang tính chu vi hình vuông...");
        return super.calcPerimeter()
    }

    
    printInfo(): void {
        console.log(">> Method printInfo() đang in thông tin của hình vuông...");
        super.printInfo()
    }
}

const square: Square = new Square(5)
const decorator: SquareDecorator = new SquareDecorator(square)
console.log(decorator.calcArea())
console.log(decorator.calcPerimeter())
decorator.printInfo()