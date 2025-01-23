let firstCard = 10
let secondCard = 4
// 1. Tạo một mảng mới - cards - chứa firstCard và secondCard
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    // 2. Tham chiếu đến mảng cards khi hiển thị thẻ bài
    cardsEl.textContent = "Thẻ bài: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Tổng: " + sum
    if (sum <= 20) {
        message = "Bạn có muốn rút thêm thẻ bài không?"
    } else if (sum === 21) {
        message = "Bạn đã có Blackjack!"
        hasBlackJack = true
    } else {
        message = "Bạn đã thua!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = 6
    sum += card
    renderGame()
}
