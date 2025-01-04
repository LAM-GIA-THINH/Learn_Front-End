document.getElementById("new-deck").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
})

// Các hàm (function) là đối tượng hạng nhất trong JavaScript

let myNum = 42
let myNum2 = myNum

function myFunction(a, b) {
    console.log(a + b)
}

let myFunction2 = myFunction
myFunction2(1, 2)

// Dòng `myFunction2(1, 2)` log ra `3` vì:

// - `myFunction2` là tham chiếu đến `myFunction`.
// - Hàm `myFunction` nhận hai tham số `a` và `b`, rồi log tổng của chúng: `a + b`.
// - Khi gọi `myFunction2(1, 2)`, giá trị `1` và `2` được truyền vào, tính tổng `1 + 2 = 3`, nên log ra `3`.