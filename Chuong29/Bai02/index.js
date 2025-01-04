/**
 Thử thách: Thêm một nút, khi nhấn vào, sẽ lấy một bộ bài mới từ API deckofcards
 
 URL: https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/
 
 Ghi toàn bộ phản hồi vào console
 */

 document.getElementById("new-deck").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
})