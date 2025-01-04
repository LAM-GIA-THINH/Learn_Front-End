// function handleClick() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// document.getElementById("new-deck").addEventListener("click", handleClick)

fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => console.log(data))

// Chuỗi Promise

/**
 * Thử thách nhỏ: Tìm hiểu xem `promise.then()` trả về gì! 
 * Lưu kết quả vào một biến và in nó ra console.
 */
// const promise = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
// const promise2 = promise.then(res => res.json())
// console.log(promise2)