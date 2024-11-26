// THIẾT LẬP BỐI CẢNH
const player = "Elliot"
const opponent = "Mr. Robot"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// CHƠI TRÒ CHƠI
points += 100
hasWon = true

// CÔNG BỐ NGƯỜI THẮNG
if (hasWon) {
    // console.log(player + " got " + points + " points and won the " + game + " game!")
    console.log(`${player} got ${points} points and won the ${game} game!`);
} else {
    // console.log("The winner is " + opponent + "! " + player + " lost the game")
    console.log(`The winner is ${opponent}! ${player} lost the game`);
}

// Xem xét tất cả các biến và quyết định chúng nên là let hay const
// Thay đổi console.log để sử dụng template strings thay vì dấu ngoặc kép
