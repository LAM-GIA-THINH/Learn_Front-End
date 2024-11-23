let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Tạo một hàm mới có tên là startGame() gọi hàm renderGame()
function startGame() {
    renderGame()
}

function renderGame() {
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

function newCard() {
    let card = 6; // Tạo một lá bài mới với giá trị là 6
    sum += card;  // Cộng giá trị của lá bài vào tổng
    renderGame(); // Gọi hàm renderGame() để cập nhật giao diện
}
