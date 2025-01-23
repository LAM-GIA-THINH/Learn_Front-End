import products from "./data.js";

function getSaleItems(data){

    return data
    .filter(product => product.type === "sweet")

    .map(({item, price}) => {

        return {
            item,
            price
        }
    });
};

const shoppingCart = getSaleItems(products);
console.log(shoppingCart);