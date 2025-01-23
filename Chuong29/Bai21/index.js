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
 * Cố gắng xác định lá bài nào trong 2 lá bài là "người chiến thắng" (có giá trị cao hơn)
 * Át là lá bài có "điểm số" cao nhất
 * 
 * Các phần:
 * 
 * 1. Tạo một hàm nhận vào 2 đối tượng lá bài làm tham số, 
 * `card1` và `card2`. Các đối tượng lá bài này có một thuộc tính gọi là
 * `value`, có thể là bất kỳ một trong các chuỗi sau, theo thứ tự tăng dần "điểm số":
 * 
 * "2", "3", "4", "5", "6", "7", "8", "9", 
 * "10", "JACK", "QUEEN", "KING", "ACE"
 * 
 * Tức là "2" có điểm số thấp nhất và "ACE" có điểm số cao nhất.
 * 
 * Hàm này sẽ xác định xem lá bài nào trong 2 lá bài (`card1`
 * hoặc `card2`) có điểm số cao hơn, hoặc nếu chúng có cùng điểm số.
 * 
 * Ghi lại kết quả vào console (chỉ ra lá bài nào thắng, 
 * hoặc "Hòa!" nếu chúng giống nhau)
 */


function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    console.log("card 1:", card1ValueIndex)
    console.log("card 2:", card2ValueIndex)
    
    if (card1ValueIndex > card2ValueIndex) {
        console.log("Card 1 wins!")
    } else if (card1ValueIndex < card2ValueIndex) {
        console.log("Card 2 wins!")
    } else {
        console.log("It's a tie!")
    }
}

const card1Obj = {
    value: "JACK"
}
const card2Obj = {
    value: "QUEEN"
}

determineCardWinner(card1Obj, card2Obj)