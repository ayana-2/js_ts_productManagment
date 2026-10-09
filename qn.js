// create an array of object as products 
// create the following functions:
// 1. getproduct(id)
// find and return a product based on its id 

const products = [
    {id: 1, name:"Laptop" , price:45000},
    {id: 2, name:"Mobile", price:35000},
    {id: 3, name:"KeyBoard", price:1200},
    {id: 4, name:"Moude", price:2000}
];

function getproduct(id) {
    return products.find(prod => prod.id === id);
}

console.log(getproduct(3));


// 2. calculateDiscound(price , discound)
// calculate and return the price after applying the discound

function calculateDiscound(price, discound) {
    return price - (price * discound / 100);
}

console.log(calculateDiscound(1000,10));


// 3. displayProduct(product)
// display the product's name and price using console.log();

function displayProduct(p) {
    console.log("Product Name:", p.name);
    console.log("Product Price:", p.price);
}

const res = getproduct(3);
displayProduct(res);


// 4. call getproduct(id) and store the result in a variable.
const result = getproduct(3);

// 5. if the product exists, call displayProduct(result)
// if the product is not found it prints: product not found

if (result) {
    displayProduct(result);
} else {
    console.log("Product not found");
}