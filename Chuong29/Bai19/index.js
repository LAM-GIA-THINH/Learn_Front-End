let deckId

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}

document.getElementById("new-deck").addEventListener("click", handleClick)

document.getElementById("draw-cards").addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data.cards)
            document.getElementById("cards").innerHTML = `
                <img src=${data.cards[0].image} class="card" />
                <img src=${data.cards[1].image} class="card" />
            `
        })
})
/**
 * Thử thách:
 * 
 * Tạo một khu vực trong HTML để đặt các lá bài vào.
 * Các lá bài thông thường có tỷ lệ 5:7 (chiều rộng so với chiều cao).
 */
