function calculate() {
    let inputA = document.getElementById("a");
    let inputB = document.getElementById("b");
    // chuyển đổi kiểu giá trị
    let a = parseFloat(inputA.value);
    let b = parseFloat(inputB.value);
    if (isNaN(a) || isNaN(b)) {
      console.log("Vui lòng nhập số hợp lệ.");
      return;
    }
    let result = a + b;
    console.log("Kết quả: " + result);
  }
  