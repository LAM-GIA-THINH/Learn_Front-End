Câu hỏi:

/*  
Ngày hôm sau Halloween 🎃 và tất cả các loại kẹo đang được giảm giá!  

Để mua tất cả kẹo, hãy sử dụng `map()` và `filter()` để đưa tất cả các loại kẹo vào một mảng `shoppingCart`.  

Mảng mới này chỉ nên chứa tên món và giá tiền, như sau:  

Kết quả mong đợi:  
[  
   {item: "🍭", price: 2.99},  
   {item: "🍫", price: 1.99},  
   {item: "🍬", price: 0.89}  
]  
*/  

Đáp án:

```javascript
const candySale = [
    {item: "🍭", price: 2.99, onSale: true},
    {item: "🍫", price: 1.99, onSale: true},
    {item: "🍬", price: 0.89, onSale: true},
    {item: "🍪", price: 3.99, onSale: false},
    {item: "🍩", price: 2.49, onSale: false}
];

function createShoppingCart(data) {
    return data.filter(candy => candy.onSale)  // Lọc các món kẹo đang giảm giá
               .map(candy => ({item: candy.item, price: candy.price}));  // Lấy chỉ tên món và giá
}

console.log(createShoppingCart(candySale));  // In ra mảng shoppingCart
```

Giải thích:
- Sử dụng `filter()` để chọn chỉ những món kẹo đang giảm giá (`onSale: true`).
- Sau đó, dùng `map()` để tạo mảng mới chỉ chứa thông tin về tên món (`item`) và giá tiền (`price`).
