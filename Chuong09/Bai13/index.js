let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// 2. Tạo một hàm startGame(). Di chuyển phần điều kiện
// dưới đây (dòng 11-20) vào trong thân hàm.

function startGame() {
    if (sum <= 20) {
        message = "Bạn có muốn rút thêm một lá bài không? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! Bạn đã được Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "Bạn đã thua cuộc! 😭";
        isAlive = false;
    }
    console.log(message);
}
