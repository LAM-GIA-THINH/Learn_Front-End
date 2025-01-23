Câu hỏi:

/*  
Sử dụng chỉ `reduce()` để tính toán và trả về tổng chi phí của các món ăn mặn trong giỏ hàng.

Kết quả mong đợi: 9.97  
*/

Đáp án:

```javascript
function totalSavory(arr) {
    return arr.reduce((total, item) => {
        // Kiểm tra nếu món hàng là món ăn mặn
        if (item.type === 'savory') {
            return total + item.price;  // Cộng giá tiền nếu món là mặn
        }
        return total;  // Nếu không phải món ăn mặn, không thay đổi tổng tiền
    }, 0);  // Khởi tạo tổng = 0
}

console.log(totalSavory(shoppingCart));  // In ra tổng chi phí của các món ăn mặn
```

Giải thích:
- Sử dụng `reduce()` để tính tổng giá trị của các món ăn mặn trong giỏ hàng.
- Bên trong hàm `reduce()`, kiểm tra thuộc tính `type` của mỗi món hàng xem nó có phải là món ăn mặn (`'savory'`) không.
- Nếu đúng, cộng giá tiền của món đó vào tổng. Nếu không phải, không làm gì và giữ nguyên tổng hiện tại.
- Mảng bắt đầu với giá trị tổng là `0`.