/**
 * Danh sách giá cả
 * Coffee $2
 * Sandwiches $5
 * Salad $4
 * Lemon Cake $3
*/

// Ví dụ: "Bạn đã chọn Salad. Giá sẽ là $4"


function selectItem(item) {
    let price = 0
/*
Thử thách:
1. Thêm các món còn lại vào các trường hợp của `switch`.
*/
    switch(item) {
        // item === 'coffee'
        case 'coffee':
            price = 2
            break 
        case 'sandwiches':
            price = 5
            break
        case 'salad':
            price = 4
            break  
        case 'lemon cake':
            price = 3 
            break
        default:
            return `Sorry, we don't sell ${item}`
    }
    return `You selected ${item}. That will be $${price}`
}

console.log(selectItem('lemon cake'))