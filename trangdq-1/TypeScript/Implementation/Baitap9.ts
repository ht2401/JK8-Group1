type Product = {
    id: number,
    name: string,
    price: number,
    quantity: number
}

// TODO 1:
const products: Array<Product> = [
    { id: 1, name: "Laptop", price: 20000, quantity: 6 },
    { id: 2, name: "Tablet", price: 200, quantity: 6 },
    { id: 3, name: "Desktop", price: 2, quantity: 6 },
    { id: 4, name: "Iphone", price: 20, quantity: 6 },
    { id: 5, name: "Earpod", price: 20, quantity: 6 },
]

// TODO 2:
const total_price: number = products.reduce((total, product) => {
    total += product.price * product.quantity;
    return total
}, 0)
console.log("Tổng giá cả tất cả các sản phẩm là " + total_price + " đồng")

// TODO 3:
const price_over100: Array<Product> = products.filter(product => product.price > 100)
console.log("Danh sách sản phẩm có giá lớn hơn 100 đồng: ");
console.log(price_over100);

// TODO 4:
const product_map = products.map(product => `Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm`)

// TODO 5:
const total_price_over100 : number = products.filter(product => product.price < 100).reduce((total, product) => {
    total += product.price * product.quantity;
    return total
}, 0)
console.log("Tổng giá cả tất cả các sản phẩm có giá nhỏ hơn 100 đồng là: " + total_price_over100);

// TODO 6:
function getDiscoutedProduct(products: Array<Product>, rate: number) : Array<Product> {
    products.forEach(product => product.price *= (1-rate))
    return products
}
console.log("Danh sách sản phẩm sau giảm giá 20%: ")
console.log(getDiscoutedProduct(products,0.2));