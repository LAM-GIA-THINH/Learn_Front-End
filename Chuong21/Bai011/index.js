/*
Thử thách:
    1. Chuyển đổi khai báo hàm này thành một biểu thức hàm.
*/

// function getTheftAlert(numberOfTransactionsHour) {
//     if (numberOfTransactionsHour > 5) {
//         return `You have made ${numberOfTransactionsHour} transactions 
//                 in the past hour. We think your card might have been 
//                 compromised`
//     }
// }

const getTheftAlert = function(numberOfTransactionsHour){
    if (numberOfTransactionsHour > 5) {
        return `You have made ${numberOfTransactionsHour} transactions 
                in the past hour. We think your card might have been 
                compromised`
    }  
}
console.log(getTheftAlert(6))

