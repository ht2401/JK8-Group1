const tinhTong = (arr: number[]) => {
    return arr.reduce((acc: number, curr: number) => acc + curr, 0);
}

const mangSoNguyen: number[] = [1, 2, 3, 4, 5, 6];
const tong: number = tinhTong(mangSoNguyen);
console.log("Tổng của mảng là:", tong);
