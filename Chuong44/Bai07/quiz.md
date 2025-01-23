Câu hỏi:  
/*  

Các từ đồng âm (Anagrams) là nhóm các từ có thể được đánh vần bằng các chữ cái giống nhau.  
Ví dụ, các chữ cái trong "pea" có thể được sắp xếp lại để tạo thành "ape", và  
các chữ cái trong "allergy" có thể được sắp xếp lại để tạo thành "gallery."

Viết một hàm để kiểm tra xem hai chuỗi ký tự viết thường có phải là các từ đồng âm không.  
Trả về true nếu đó là các từ đồng âm. Trả về false nếu không phải.

Ví dụ đầu vào: "allergy", "gallery"  
Ví dụ đầu ra: true

Ví dụ đầu vào: "rainbow", "crossbow"  
Ví dụ đầu ra: false  
*/  

Đáp án:

```javascript
function isAnagram(str1, str2) {
    // Kiểm tra nếu độ dài của hai chuỗi không bằng nhau, thì không phải là anagram
    if (str1.length !== str2.length) {
        return false;
    }

    // Sắp xếp các chữ cái của cả hai chuỗi và so sánh chúng
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2; // Nếu các chuỗi sau khi sắp xếp giống nhau, thì là anagram
}

console.log(isAnagram("allergy", "gallery")); // true
console.log(isAnagram("treasure", "measure")); // true
console.log(isAnagram("rainbow", "crossbow")); // false
```

Giải thích:
- Hàm `isAnagram` kiểm tra nếu hai chuỗi có độ dài bằng nhau, nếu không thì trả về `false`.
- Sử dụng phương thức `split('')` để chuyển chuỗi thành mảng các ký tự, sau đó sắp xếp mảng bằng `sort()`, rồi ghép lại thành chuỗi với `join('')`.
- Nếu chuỗi sau khi sắp xếp giống nhau, thì chúng là anagram, và hàm trả về `true`, nếu không thì trả về `false`.