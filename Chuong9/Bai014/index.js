let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// 1. Lưu đoạn paragraph có id là message-el vào một biến gọi là messageEl
let messageEl = document.getElementById("message-el");

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
    // 2. Hiển thị thông báo trong messageEl sử dụng messageEl.textContent
    messageEl.textContent = message;
}
