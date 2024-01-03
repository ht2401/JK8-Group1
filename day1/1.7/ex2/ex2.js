function tinhDienTichToanPhan(chieuDai, chieuRong, chieuCao) {
    // Tính diện tích toàn phần
    let dienTichMat1 = chieuDai * chieuRong;
    let dienTichMat2 = chieuDai * chieuCao;
    let dienTichMat3 = chieuRong * chieuCao;

    let dienTichToanPhan = 2 * (dienTichMat1 + dienTichMat2 + dienTichMat3);

    return dienTichToanPhan;
}

function tinhVaHienThi() {
    // Lấy giá trị từ các ô input
    let chieuDai = parseFloat(document.getElementById("chieuDai").value);
    let chieuRong = parseFloat(document.getElementById("chieuRong").value);
    let chieuCao = parseFloat(document.getElementById("chieuCao").value);

    // Kiểm tra xem người dùng đã nhập giá trị hợp lệ chưa
    if (isNaN(chieuDai) || isNaN(chieuRong) || isNaN(chieuCao)) {
        alert("Vui lòng nhập các giá trị số hợp lệ.");
    } else {
        // Tính diện tích toàn phần
        let dienTichToanPhan = tinhDienTichToanPhan(chieuDai, chieuRong, chieuCao);

        // Hiển thị kết quả trên trang web
        document.getElementById("ketQua").innerHTML = "Diện tích toàn phần của hình hộp chữ nhật là: " + dienTichToanPhan;
    }
}
