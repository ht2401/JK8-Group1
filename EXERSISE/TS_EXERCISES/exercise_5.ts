class Rectangle {
    private chieuDai: number;
    private chieuRong: number;

    constructor(chieuDai: number, chieuRong: number) {
        this.chieuDai = chieuDai;
        this.chieuRong = chieuRong;
    }

    tinhDienTich(): number {
        return this.chieuDai * this.chieuRong;
    }
}

const hinhChuNhat1 = new Rectangle(5, 10);
const dienTich1 = hinhChuNhat1.tinhDienTich();
console.log("Diện tích hình chữ nhật 1:", dienTich1);

const hinhChuNhat2 = new Rectangle(8, 15);
const dienTich2 = hinhChuNhat2.tinhDienTich();
console.log("Diện tích hình chữ nhật 2:", dienTich2);
