function nhapThongTin() {
    let hoTen = prompt("Nhập họ và tên:");
    let tuoi = prompt("Nhập tuổi:");
    let soDienThoai = prompt("Nhập số điện thoại:");

    let thongTin = {
        hoTen: hoTen,
        tuoi: tuoi,
        soDienThoai: soDienThoai
    };

    // Hiển thị thông tin trong console
    console.log("Thông tin cá nhân:", thongTin);

    // Hiển thị thông tin trực tiếp trên trang web
    let thongTinElement = document.getElementById("thongTinCaNhan");
    thongTinElement.innerHTML = `
        <h2>Thông tin cá nhân:</h2>
        <p><strong>Họ tên:</strong> ${thongTin.hoTen}</p>
        <p><strong>Tuổi:</strong> ${thongTin.tuoi}</p>
        <p><strong>Số điện thoại:</strong> ${thongTin.soDienThoai}</p>
    `;

    return thongTin;
}

let thongTinCaNhan = nhapThongTin();
