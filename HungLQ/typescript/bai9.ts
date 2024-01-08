type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

//temp product
let product1:Product = {id: 1,name: "product1", price: 10, quantity: 1};
let product2:Product = {id: 2,name: "product2", price: 20, quantity: 2};
let product3:Product = {id: 3,name: "product3", price: 30, quantity: 3};
let product4:Product = {id: 4,name: "product4", price: 40, quantity: 4};
let product5:Product = {id: 5,name: "product5", price: 110, quantity: 5};



let productList: Product[] = [];
productList.push(product1,product2,product3,product4,product5);

const totalPrice: number = productList.reduce((sum,e2) => {
    return sum + e2.price;
}, 0);
console.log(totalPrice);
//  
let filterPrice: Product[] = productList.filter(e => e.price>100);
console.log(filterPrice);

// 
let detail : String[] = productList.map(e => {
    return `id:${e.id}, name: ${e.name}, price: ${e.price}, quantity:${e.quantity}`}
    );

console.log(detail);

// 
let totalPriceUnder100:number = productList.reduce((sum,p) => {
    if(p.price < 100) return sum + p.price;
    else return sum;
},0);

console.log(totalPriceUnder100)

const getDiscountedProducts = (list: Product[], rate:number) =>{
    return list.map(e => {e.price*=1-rate/100; return e});
}

console.log(getDiscountedProducts(productList,90));