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
/**
 * Thử thách
 * 
 * Bối cảnh:
 * API Bộ Bài yêu cầu chúng ta cung cấp id của bộ bài 
 * mà chúng ta đang chơi để nó có thể nhớ những lá bài 
 * mà chúng ta đã rút, số lá bài còn lại trong bộ bài, v.v.
 * 
 * Nhiệm vụ: lưu trữ deck_id từ dữ liệu trả về vào một 
 * biến cục bộ để chúng ta có thể sử dụng nó sau này
 */
