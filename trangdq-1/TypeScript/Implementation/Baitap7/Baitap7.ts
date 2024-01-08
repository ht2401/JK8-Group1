// Bài 7: Tạo một hàm sử dụng Promise để gọi một API và trả về dữ liệu sau khi gọi xong. 
// (Có thể sử dụng json-server để tạo API và node-fetch để thực hiện các yêu cầu HTTP. 
// https://github.com/typicode/json-server) 

import fetch from 'node-fetch';

function callAPI(url: string): Promise<any> {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Không thể gọi API...");
    }
  });
}

const url = "http://localhost:3000/2"; // npx json-server db.json
const products = callAPI(url);
console.log(products); 

// ts-node --esm
