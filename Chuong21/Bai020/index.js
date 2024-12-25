import { itemsBoughtArr } from './itemsBoughtArr.js'

function calculateTotalCost(itemsBoughtArr){
/*
Thách thức:
1. Sử dụng phương thức reduce để tính tổng chi phí
   của các mặt hàng đã được mua.
*/
    const total = itemsBoughtArr.reduce((total, currentItem)=>
        total + currentItem.priceUSD, 0
        )
    return total
}

console.log(calculateTotalCost(itemsBoughtArr))