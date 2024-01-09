type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

type ProductList = Product[];

var listProduct: ProductList = [
    {
        id : 1,
        name : "Ban chai",
        price : 10,
        quantity : 50
    },

    {
        id : 2,
        name : "Dong ho",
        price : 30,
        quantity : 10
    },

    {
        id : 3,
        name : "Tu Lanh",
        price : 600,
        quantity : 20
    },
    
    {
        id : 4,
        name : "Ban Chai",
        price : 4,
        quantity : 100
    },

    {
        id : 5,
        name : "Do dien",
        price : 200,
        quantity : 50
    }

];

function getProductTotalPrice(product: Product) {
    return product.price * product.id;
}

function getProductListTotalPrice(){
    return listProduct.reduce((acc, product) => acc + getProductTotalPrice(product), 0);
}

function getProductByProductPriceOver100(){
    let result: Product[] = listProduct.filter((product) => product.price > 100);
    return result;
}

function printProductDescriptions(){
    const productDescriptions: string[] = listProduct.map(
        (product) => `San pham ${product.name} co gia ${product.price} dong va con ${product.quantity} san pham`);
    return productDescriptions;
}

function getTotalPriceWhereProductPriceUnder100(){
    let result: Product[] = listProduct.filter((product) => product.price < 100);
    return result.reduce((acc, product) => acc += getProductTotalPrice(product), 0);
}

function main(){

    console.log(listProduct);
    console.log(getProductListTotalPrice());
    console.log(getProductByProductPriceOver100());
    console.log(printProductDescriptions());
    console.log(getTotalPriceWhereProductPriceUnder100());
}

main();