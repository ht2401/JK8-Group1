// Bài 7: Tạo một hàm sử dụng Promise để gọi một API và trả về dữ liệu sau khi gọi xong. 
// (Có thể sử dụng json-server để tạo API và node-fetch để thực hiện các yêu cầu HTTP. 
// https://github.com/typicode/json-server) 

import fetch from 'node-fetch';
type Product = {
  id: number,
  name: string,
  price: number,
  quantity: number
}

async function getProduct(url: string): Promise<Product> {
  return await fetch(url).then((response) => {
    if (response.ok) { 
      return response.json()
    } else {
      throw new Error("Không thể lấy dữ liệu sản phẩm...");
    }
  });
}

async function main() {
  try {
    const product = await getProduct("http://localhost:3000/0");
    console.log(product); 
  } catch (error) {
    console.error("Error:", error);
  }
}

main() 
