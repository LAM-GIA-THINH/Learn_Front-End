import products from "./data.js";

function sortProducts(data){
    return data.sort((a,b) => {
        return a.price - b.price
    });
}

const listByCheapest = sortProducts(products);
// console.log(listByCheapest);

listByCheapest.forEach(item => console.log(item.product, item.price));

