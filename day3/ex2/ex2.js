class SinhVien {
    constructor(ten, tuoi, gioiTinh, ngaySinh) {
      this.ten = ten;
      this.tuoi = tuoi;
      this.gioiTinh = gioiTinh;
      this.ngaySinh = ngaySinh;
    }
    getInfo() {
      console.log(`Thông tin sinh viên:
        Tên: ${this.ten}
        Tuổi: ${this.tuoi}
        Giới tính: ${this.gioiTinh}
        Ngày sinh: ${this.ngaySinh}`);
    }
    setName(newName) {
      this.ten = newName;
    }
  }
  // Tạo đối tượng 
  let sinhVien1 = new SinhVien("Ha Thang", 22, "Nam", "01/01/2001");
  
  // In thông tin 
  sinhVien1.getInfo();
  
  // Đổi tên cho sinh viên
  sinhVien1.setName("Thang Ha");
  sinhVien1.getInfo();
  