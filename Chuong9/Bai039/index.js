// Làm nó đi từ 1 - 6
let randomNumber = Math.floor( Math.random() * 6 )+1

console.log(randomNumber)

// Tạo một hàm, rollDice(), trả về một số ngẫu nhiên trong khoảng từ 1 đến 6
function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber
}

console.log(rollDice());