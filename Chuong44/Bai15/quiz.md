Câu hỏi:  
/*  
Pizza Night?  
Đó là cuối tuần và bạn cùng bạn bè không thể quyết định nên đặt món gì cho bữa tối, vì vậy bạn quyết định bỏ phiếu.  

Viết một hàm để tìm món ăn có số phiếu bầu cao nhất.  

Hàm của bạn nên nhận vào một đối tượng thực phẩm và tìm món ăn có số phiếu cao nhất. Nó sẽ in ra món thắng cuộc, cùng với số phiếu mà món đó nhận được.  

Ví dụ đầu vào: {"🐈 cats": 19, "🐕 dogs": 17}  
Ví dụ đầu ra: The winner is 🐈 cats with 19 votes!  
*/  

Đáp án:

```javascript
function findTheWinner(obj) {
    let winner = "";
    let maxVotes = 0;
    
    // Duyệt qua tất cả các mục trong đối tượng để tìm món ăn có số phiếu cao nhất
    for (let food in obj) {
        if (obj[food] > maxVotes) {
            winner = food;
            maxVotes = obj[food];
        }
    }
    
    // Trả về kết quả
    return `The winner is ${winner} with ${maxVotes} votes!`;
}

console.log(findTheWinner(gameNightFood)); // In ra món ăn thắng cuộc và số phiếu
```

Giải thích:
- Duyệt qua tất cả các món ăn trong đối tượng `obj` và so sánh số phiếu bầu của từng món. 
- Khi tìm thấy món ăn có số phiếu cao hơn món hiện tại, cập nhật `winner` và `maxVotes`.
- Cuối cùng, trả về kết quả bằng một chuỗi có định dạng như yêu cầu.