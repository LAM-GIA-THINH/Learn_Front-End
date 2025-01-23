let deckId
let computerScore = 0
let myScore = 0
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const header = document.getElementById("header")
const remainingText = document.getElementById("remaining")
const computerScoreEl = document.getElementById("computer-score")
const myScoreEl = document.getElementById("my-score")

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            remainingText.textContent = `Remaining cards: ${data.remaining}`
            deckId = data.deck_id
            console.log(deckId)
        })
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            remainingText.textContent = `Remaining cards: ${data.remaining}`
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
            const winnerText = determineCardWinner(data.cards[0], data.cards[1])
            header.textContent = winnerText
            
            if (data.remaining === 0) {
                drawCardBtn.disabled = true
            }
        })
})

/**
 * Thử thách:
 * 
 * Cập nhật điểm số! Mỗi lần máy tính thắng một lượt, cộng 1 điểm vào
 * điểm số của máy tính. Làm tương tự cho mỗi lần bạn thắng một lượt.
 * Nếu kết quả là "War" (giá trị của hai lá bài bằng nhau), không ai được tính điểm.
 * 
 * Hiển thị điểm số của máy tính ở phía trên lá bài đầu tiên, và hiển thị
 * điểm số của bạn ở DƯỚI lá bài thứ hai.
 * 
 * Theo dõi điểm số bằng các biến toàn cục đã được định nghĩa ở đầu tệp này.
 * 
 * Thêm điểm vào các biến toàn cục bên trong hàm `determineCardWinner` bên dưới.
 */

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    
    if (card1ValueIndex > card2ValueIndex) {
        computerScore++
        computerScoreEl.textContent = `Computer score: ${computerScore}`
        return "Computer wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        myScore++
        myScoreEl.textContent = `My score: ${myScore}`
        return "You win!"
    } else {
        return "War!"
    }
}
