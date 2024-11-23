let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]; // mảng - danh sách có thứ tự các phần tử
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    renderGame();
}

function renderGame() {
    // hiển thị firstCard và secondCard
    cardsEl.textContent = "Thẻ bài: " + cards[0] + " " + cards[1];
    // hiển thị Tổng các thẻ bài chúng ta có
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
    let card = 6; 
    sum += card;  

    renderGame(); 
}
