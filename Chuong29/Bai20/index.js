let deckId
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
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
        })
})
/**
 * Thử thách:
 * 
 * Đặt mỗi lá bài chúng ta rút vào vị trí thẻ bài tương ứng của nó
 * Gợi ý: xem xét sử dụng element.children trong DOM thay vì
 * gán mỗi thẻ bài một ID duy nhất
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/children
 */
