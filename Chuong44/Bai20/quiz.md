Câu hỏi:

/*  
Bạn đang mua sắm trực tuyến cho các món quà lễ hội, nhưng tiền bạc có hạn,  
vì vậy chúng ta cần xem các món hàng rẻ nhất trước.  
Sử dụng phương thức `sort()` để viết một hàm trả về mảng các sản phẩm  
được sắp xếp theo giá, từ rẻ nhất đến đắt nhất. 

Sau đó, in ra tên món hàng và giá của nó:

💕, 0
🍬, 0.89
🍫, 0.99
🧁, 0.99
📚, 0.99
... tiếp tục
*/

Đáp án:

```javascript
function sortProducts(data) {
    // Sắp xếp mảng các sản phẩm theo giá từ rẻ nhất đến đắt nhất
    return data.sort((a, b) => a.price - b.price);
}

const listByCheapest = sortProducts(products);

// In ra tên món hàng và giá
listByCheapest.forEach(item => {
    console.log(`${item.item},${item.price}`);
});
```

Giải thích:
- Hàm `sortProducts` sử dụng `sort()` để sắp xếp các sản phẩm trong mảng `data` theo giá từ rẻ nhất đến đắt nhất. Hàm so sánh `a.price - b.price` đảm bảo các món hàng có giá thấp hơn sẽ được đưa lên đầu.
- Sau khi mảng đã được sắp xếp, ta sử dụng `forEach` để lặp qua từng món hàng trong mảng đã sắp xếp và in ra tên món hàng cùng với giá của nó.