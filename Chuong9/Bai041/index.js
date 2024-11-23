//Hoàn thành hàm
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

let firstCard = getRandomCard()  
let secondCard = getRandomCard() 
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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
