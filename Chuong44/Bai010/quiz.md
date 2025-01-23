Câu hỏi:  
/*  
Bàn tay của ông già không còn vững vàng như trước. Cuối cùng bạn đã thuyết phục ông bắt đầu sử dụng trình quản lý mật khẩu, nhưng ông vô tình đã gõ và lưu mật khẩu của mình với một đống ký tự thừa.  
Hãy giúp ông lấy lại mật khẩu của mình bằng cách loại bỏ tất cả các ký tự trùng lặp.  

Hàm của bạn sẽ nhận vào một chuỗi các ký tự và trả về một chuỗi với các ký tự trùng lặp đã bị loại bỏ.  
Giả sử đầu vào là chuỗi viết thường chỉ chứa các chữ cái và số.

Ví dụ đầu vào: "aabbccb1212"  
Ví dụ đầu ra: "abc12"  
*/  

Đáp án:

```javascript
function removeDupeChars(chars) {
    // Sử dụng Set để loại bỏ các ký tự trùng lặp
    return [...new Set(chars)].join('');
}

console.log(removeDupeChars(password)); // Sử dụng chuỗi mật khẩu ví dụ
```

Giải thích:
- `new Set(chars)`: Tạo một `Set` từ chuỗi đầu vào. Một `Set` tự động loại bỏ các giá trị trùng lặp.
- `...new Set(chars)`: Sử dụng toán tử spread (`...`) để chuyển `Set` trở lại thành mảng.
- `join('')`: Ghép các phần tử trong mảng thành một chuỗi.

Kết quả sẽ là chuỗi mật khẩu mà không có ký tự trùng lặp.