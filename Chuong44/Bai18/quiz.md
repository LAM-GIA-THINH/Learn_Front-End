Câu hỏi:

/*  
Sử dụng `reduce()` để tính tổng số tiền của các món hàng trong giỏ.  
Sau đó, tìm một phương thức để làm tròn tổng số tiền đến 2 chữ số thập phân.

Kết quả mong đợi: 73.44
*/

Đáp án:

```javascript
function total(arr) {
    // Tính tổng số tiền của các món hàng bằng reduce
    const sum = arr.reduce((total, item) => total + item.price, 0);
    
    // Làm tròn tổng số tiền đến 2 chữ số thập phân
    return sum.toFixed(2);  // toFixed(2) làm tròn đến 2 chữ số thập phân
}

console.log(total(shoppingCart));  // In ra tổng tiền giỏ hàng đã được làm tròn
```

Giải thích:
- Dùng phương thức `reduce()` để tính tổng giá trị của tất cả các món hàng trong giỏ hàng. Hàm `reduce()` lặp qua từng phần tử trong mảng và cộng dồn giá trị vào `total`.
- Sử dụng `toFixed(2)` để làm tròn tổng số tiền về 2 chữ số thập phân, giúp kết quả trông rõ ràng hơn.