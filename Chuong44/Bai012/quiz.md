Câu hỏi:  
/*  
Chef Mario đang viết cuốn sách công thức của mình khi bất ngờ làm đổ cà phê lên bàn phím! Giờ đây tất cả các công thức của ông đều có các nguyên liệu bị lặp lại.  
Hãy giúp Chef Mario cứu cuốn sách của mình bằng cách viết một hàm nhận vào một mảng và trả về một mảng mới với tất cả các phần tử trùng lặp đã được loại bỏ.  

Ví dụ đầu vào: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];  
Ví dụ đầu ra: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];  
*/  

Đáp án:

```javascript
function removeDupesFromArray(arr) {
    // Sử dụng Set để loại bỏ các phần tử trùng lặp
    return [...new Set(arr)];
}

console.log(removeDupesFromArray(eggScrambleRecipe)); // Loại bỏ phần tử trùng lặp từ công thức
```

Giải thích:
- `new Set(arr)`: Tạo một `Set` từ mảng đầu vào. `Set` tự động loại bỏ các phần tử trùng lặp.
- `...new Set(arr)`: Sử dụng toán tử spread (`...`) để chuyển `Set` trở lại thành mảng.
- `console.log(removeDupesFromArray(eggScrambleRecipe))`: In mảng mới với các phần tử đã loại bỏ trùng lặp.