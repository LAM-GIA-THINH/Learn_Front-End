// Khi nào cần dùng ngoặc nhọn:

// 1 tham số: không cần ngoặc nhọn
// 0 hoặc 2 tham số trở lên: cần ngoặc nhọn

// Khi nào cần dùng {} + return

// Trả về một dòng code: không cần ngoặc nhọn hoặc từ khóa return
// Logic phức tạp hơn: cần ngoặc nhọn và từ khóa return

// const getSpendAlert = function(amount){
//     return `Warning! You just spent £${amount}!`
// }

// const getSpendAlert = amount => `Warning! You just spent £${amount}!`


const getSpendAlert = amount => {
    if (amount > 50) {
        return `Warning! You just spent £${amount}!`
    }
}

console.log(getSpendAlert(100))