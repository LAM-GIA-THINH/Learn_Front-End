/**  
 * Thử thách: Định nghĩa hàm callback ẩn danh của chúng ta như một hàm riêng biệt,  
 * sau đó truyền nó làm tham số thứ 2 cho phương thức `addEventListener`.  
 */ 

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)