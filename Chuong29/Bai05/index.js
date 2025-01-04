function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)

/**  
 * Thử thách:  
 *  
 * Phần 1: Viết lệnh `setTimeout`. Đặt nó đợi 2000 ms trước khi log "I finally ran!" ra console.  
 *  
 * Phần 2: Chuyển hàm ẩn danh nội tuyến thành một hàm riêng, có tên.  
 */

function callback() {
    console.log("I finally ran!")
}

setTimeout(callback, 2000)