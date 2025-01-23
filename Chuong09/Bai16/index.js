let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// 2. Lưu đoạn paragraph hiển thị thẻ bài vào một biến gọi là cardsEl
let cardsEl = document.getElementById("cards-el");

function startGame() {
    // 3. Hiển thị thẻ bài trên trang web theo định dạng này -> "Cards: 10 4"
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
