let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    cardsEl.textContent = "Thẻ bài: " + firstCard + " " + secondCard;
    sumEl.textContent = "Tổng: " + sum;
    if (sum <= 20) {
        message = "Bạn có muốn rút thêm một lá bài không?";
    } else if (sum === 21) {
        message = "Bạn đã có Blackjack!";
        hasBlackJack = true;
    } else {
        message = "Bạn đã thua cuộc!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

// 2. Tạo một hàm newCard() để ghi ra "Đang rút một lá bài mới từ bộ bài!"
function newCard() {
    console.log("Đang rút một lá bài mới từ bộ bài!");
}
