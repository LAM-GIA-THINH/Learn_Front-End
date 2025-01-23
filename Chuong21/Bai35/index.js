const accountBalanceUsd = '$45,000,000,000 🤑💰'
const swissBankPassCodesArr = [1234,5678,9876,3434]

function authenticationCheck(passCode){
    swissBankPassCodesArr.includes(passCode) && console.log(accountBalanceUsd)
}

authenticationCheck(1234)

/*
Thách thức:
1. Nếu mã passcode được truyền vào `authenticationCheck` 
   tồn tại trong `swissBankPassCodesArr`, hàm `authenticationCheck` 
   cần phải in ra giá trị `accountBalanceUsd`. 
   
   Nếu mã passcode không tồn tại trong `swissBankPassCodesArr`, 
   thì `authenticationCheck` không cần làm gì cả.
*/