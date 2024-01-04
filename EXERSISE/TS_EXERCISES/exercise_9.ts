import { Interface } from "readline";

type Product = {
    id: number,
    name: string,
    price: number,
    quantity: number
};

const productList: Product[] = [
    { id: 1, name: 'Product A', price: 100000, quantity: 5 },
    { id: 2, name: 'Product B', price: 200000, quantity: 3 },
    { id: 3, name: 'Product C', price: 15000, quantity: 8 },
    { id: 4, name: 'Product A', price: 120000, quantity: 5 },
    { id: 5, name: 'Product B', price: 80000, quantity: 3 },
    { id: 6, name: 'Product C', price: 150000, quantity: 8 }
];

//In ra thông tin sản phẩm
productList.forEach(product => {
    console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`);
});

//tổng giá trị của hàng hóa
const totalPrice: number = productList.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
}, 0)

console.log("Tổng giá trị sản phẩm", totalPrice);

//Danh sách sản phẩm có giá > 100
const expensiveProducts: Product[] = productList.filter(product => product.price > 100);

console.log("Sản phẩm có giá lớn hơn 100 ", expensiveProducts)


//In ra thông tin sản phẩm theo template
productList.map(product => {
    console.log(`Sản phẩm ${product.name} có giá: ${product.price} và còn: ${product.quantity}`);
});


//tính tổng số lượng các sản phẩm có giá dưới 100
const totalQuantityUnder100: number = productList
    .filter((product) => product.price < 100)
    .reduce((accumulator, product) => accumulator + product.quantity, 0);
console.log("Tổng số lượng các sản phẩm có giá dưới 100: ", totalQuantityUnder100);

//6
const getDiscountProducts = (productList: Product[], discountRate: number): Product[] => {
    const discountPrice = productList.map((product) => {
        const discountPrice = product.price * (1-discountRate);
        return {... product, price: discountPrice};
    })
    
    return discountPrice;
}
console.log("Các sản phẩm sau khi đã giảm giá", getDiscountProducts(productList, 0.5))