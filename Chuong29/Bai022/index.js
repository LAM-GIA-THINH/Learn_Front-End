let deckId
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const header = document.getElementById("header")

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
            console.log(deckId)
        })
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
            const winnerText = determineCardWinner(data.cards[0], data.cards[1])
            header.textContent = winnerText
        })
})
/**
 * Thử thách:
 * 
 * Hãy thử xác định trong 2 lá bài, lá nào là "người chiến thắng" (có giá trị cao hơn).
 * Lá Át (Ace) là lá bài có giá trị cao nhất.
 * 
 * Phần 2:
 * Thay vì chỉ log ra console để xác định người thắng, 
 * hãy hiển thị một phần tử `h2` trên màn hình, phía trên 2 lá bài, 
 * để thông báo ai là người chiến thắng.
 * 
 * Nếu lá bài đầu tiên (card1) có giá trị cao hơn, hiển thị "Máy tính thắng!".
 * Nếu lá bài thứ hai (card2) có giá trị cao hơn, hiển thị "Bạn thắng!".
 * Nếu hai lá bài bằng nhau, hiển thị "Hòa!".
 */

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    
    if (card1ValueIndex > card2ValueIndex) {
        return "Card 1 wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        return "Card 2 wins!"
    } else {
        return "War!"
    }
}

// Giữ đoạn mã kiểm tra này để tham khảo, nhưng có thể xóa sau
// const card1Obj = {
//     value: "JACK"
// }
// const card2Obj = {
//     value: "QUEEN"
// }

// determineCardWinner(card1Obj, card2Obj)