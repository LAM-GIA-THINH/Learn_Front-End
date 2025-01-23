let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
// 2. Lưu đoạn paragraph hiển thị sum vào một biến gọi là sumEl
// Thử dùng let sumEl = document.querySelector("#sum-el")
let sumEl = document.getElementById("sum-el");

function startGame() {
    // 3. Hiển thị giá trị sum trên trang web theo định dạng này -> "Sum: 14"
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
