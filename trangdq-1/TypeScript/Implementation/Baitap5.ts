// Bài 5: Tạo một lớp Rectangle có các thuộc tính là chiều dài và chiều rộng. 
// Thêm một phương thức tính diện tích của hình chữ nhật. 
// Sau đó tính diện tích của 1 hình chữ nhật bất kỳ
class Rectangle {
    width: number
    length: number

    constructor(width: number, length: number) {
        this.width = width
        this.length = length
    }
    
    calcArea() : number {
        return this.width * this.length
    }
}

const rectangle : Rectangle = new Rectangle(15,6.5)

console.log(rectangle.calcArea());
