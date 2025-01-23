Câu hỏi:  
/*  
Bạn có thể giúp tôi đếm số lần mỗi chữ cái trong tên của tôi xuất hiện không?  
Viết một hàm nhận vào họ và tên của bạn và trả về một đối tượng, trong đó các khóa là từng ký tự trong tên của bạn, và giá trị là số lần ký tự đó xuất hiện trong tên của bạn.  
Hàm của bạn KHÔNG được đếm khoảng trắng và không phân biệt chữ hoa chữ thường (chữ 't' viết thường và chữ 'T' viết hoa được coi là cùng một ký tự).  
*/  

Đáp án:

```javascript
function countChars(str) {
    // Chuyển chuỗi về chữ thường và loại bỏ khoảng trắng
    const cleanedStr = str.toLowerCase().replace(/\s+/g, '');
    const charCount = {};

    // Duyệt qua từng ký tự trong chuỗi đã làm sạch
    for (const char of cleanedStr) {
        // Nếu ký tự đã tồn tại trong đối tượng, tăng giá trị lên 1
        // Nếu chưa tồn tại, khởi tạo giá trị là 1
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

console.log(countChars("Peggy Porth"));
```

Giải thích:
- `toLowerCase()`: Chuyển tất cả các ký tự trong chuỗi về chữ thường để không phân biệt chữ hoa chữ thường.
- `replace(/\s+/g, '')`: Loại bỏ tất cả các khoảng trắng trong chuỗi.
- Duyệt qua từng ký tự trong chuỗi đã làm sạch và sử dụng đối tượng `charCount` để đếm số lần xuất hiện của mỗi ký tự. Nếu ký tự đã tồn tại trong đối tượng, tăng giá trị lên 1; nếu chưa tồn tại, khởi tạo giá trị là 1. 