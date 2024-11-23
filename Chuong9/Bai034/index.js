// 1. Tạo một hàm, getRandomCard(), luôn trả về số 5
function getRandomCard() {
    return 5;
}

let firstCard = getRandomCard()  // Sử dụng getRandomCard() để lấy giá trị cho firstCard
let secondCard = getRandomCard() // Sử dụng getRandomCard() để lấy giá trị cho secondCard
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
    cardsEl.textContent = "Thẻ bài: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

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
    // 3. Sử dụng getRandomCard() để thiết lập giá trị của thẻ
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
