// Hoisting: Khai báo hàm được "nâng" lên đầu phạm vi của nó trước khi mã được thực thi
// Đối với function:
// Không bị hoisting
// Sạch hơn và dễ đọc hơn (có thể tranh cãi)
// Được nhiều nhóm phát triển lựa chọn

// function getSpendAlert(amount) {
//     return `Warning! You just spent £${amount}!`
// }
// console.log(getSpendAlert(100))

// console.log(getSpendAlert(200))
// function getSpendAlert(amount) {
//     return `Warning! You just spent £${amount}!`
// }

// const getSpendAlert = function(amount){
//     return `Warning! You just spent £${amount}!`
// }
// console.log(getSpendAlert(200))

console.log(getSpendAlert(150))
const getSpendAlert = function(amount){
    return `Warning! You just spent £${amount}!`
}
