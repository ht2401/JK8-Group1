// Hãy tạo thêm một button Submit và gắn sự kiện click cho button này sao cho khi 
// click vào button thì gọi một hàm trong file main.js để cộng hai số đã nhập vào hai 
// ô input sau đó in kết quả ra trên màn hình console.

// Gợi ý: để lấy giá trị ra từ ô input
    // let inputA = document.getElementById(“a”);
    // let value = inputA.value;
// Chú ý: giá trị lấy từ input là kiểu string, cần đổi về kiểu number để tính toán
const form = document.querySelector('form')
const submitBtn = document.createElement('button')
submitBtn.textContent = "Submit"
submitBtn.type = "submit"
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const a = document.getElementById('a').value
    const b = document.getElementById('b').value
    console.log("a+b=" + (parseInt(a) + parseInt(b)));
})
form.appendChild(submitBtn)