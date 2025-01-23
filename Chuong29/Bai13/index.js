// function handleClick() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// document.getElementById("new-deck").addEventListener("click", handleClick)

fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => console.log(data))
    .then(callback)
    
/* 
- Các Promise có thể ở một trong 3 trạng thái vào bất kỳ thời điểm nào:
    - Đang chờ (Pending)
    - Hoàn thành (Fulfilled) - chạy khối .then()
    - Bị từ chối (Rejected)
*/
// Sử dụng Promise chaining để xử lý phản hồi từ một API. 
// Sau khi dữ liệu được lấy về và phân tích cú pháp JSON, 
// nó sẽ được in ra console, và nếu có, hàm callback sẽ được gọi tiếp theo