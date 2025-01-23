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
        .then(data => console.log(data))
})
/**
 * Thử thách
 * 
 * Nhiệm vụ: Sử dụng deckId đã lưu, rút 2 lá bài mới từ bộ bài
 * 
 * Tài liệu cho API Bộ Bài gốc: https://deckofcardsapi.com/#draw-card
 * BaseUrl bạn sẽ sử dụng: https://apis.scrimba.com/deckofcards/api/deck/
 * (điều này sẽ thay thế base url https://deckofcardsapi.com/api/deck/)
 * mà bạn sẽ thấy trong tài liệu API Bộ Bài.
 * 
 * 1. Tạo một nút mới mà khi nhấn vào, sẽ rút 2 lá bài từ deckId
 * bạn đã lưu
 *      Lưu ý: bạn sẽ cần phải tạo một bộ bài mới mỗi khi làm mới trang,
 *      vì hiện tại bạn chỉ lưu deckId trong một biến cục bộ
 * 2. Ghi 2 lá bài đó ra console
 */
