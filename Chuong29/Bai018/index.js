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
                <img src=${data.cards[0].image} />
                <img src=${data.cards[1].image} />
            `
        })
})
/**
 * Thử thách:
 * 
 * Bắt đầu làm cho giao diện trông đẹp hơn :)
 * 
 * 1. Thêm nền bàn bài với hình ảnh img/table.png đã được cung cấp.
 * 2. Di chuyển nút rút bài xuống dưới cùng của trang, chiếm toàn bộ chiều rộng.
 * 3. Thêm một số kiểu dáng cho nút. Bạn có thể sử dụng bức ảnh trong các slide
 * để làm một lựa chọn.
 */
