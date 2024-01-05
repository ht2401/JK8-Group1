// Bài 1: Viết hàm tính tiền điện theo giá bậc thang, với đầu vào là số điện đã tiêu thụ, đầu ra là số tiền phải trả.
// Các thang giá cần tính theo bảng giá điện sinh hoạt của EVN:
// tham khảo tại https://www.evn.com.vn/c3/evn-va-khach-hang/Bieu-gia-ban-le-dien-9-79.aspx (có 6 bậc giá)
// Chú ý: tiền điện phải trả cần tính thêm 10% thuế VAT

function calcEVN(input) {
    switch (true) {
        case (0 < input < 50):
            return input * 1806 * 1.1
        case (51 < input < 100):
            return input * 1866 * 1.1
        case (101 < input < 200):
            return input * 2167 * 1.1
        case (201 < input < 300):
            return input * 2729 * 1.1
        case (301 < input < 400):
            return input * 3050 * 1.1
        case (401 <= input):
            return input * 3151 * 1.1
    }
}

console.log(calcEVN(100.87).toFixed(2));


