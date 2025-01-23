Câu hỏi:  
/*  
Palindromes là các từ giống nhau khi đọc từ trái qua phải và từ phải qua trái. Ví dụ, các từ "noon" và "kayak" là các palindrome.  

Viết một hàm để kiểm tra xem một chuỗi chữ cái viết thường có phải là một palindrome không.  
Nếu từ đó là palindrome, trả về true. Nếu không, trả về false.

Ví dụ đầu vào: "motorbike"  
Ví dụ đầu ra: false

Ví dụ đầu vào: "rotator"  
Ví dụ đầu ra: true  
*/  

Đáp án:

```javascript
function isPalindrome(str) {
    // Đảo ngược chuỗi và so sánh với chuỗi gốc
    return str === str.split('').reverse().join('');
}

// Kiểm tra các hàm
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("civic")); // true
console.log(isPalindrome("octopus")); // false
console.log(isPalindrome("pumpkins")); // false
console.log(isPalindrome("madam")); // true
```

Giải thích:
- Hàm `isPalindrome` kiểm tra nếu chuỗi gốc giống với chuỗi sau khi được đảo ngược. Nếu giống nhau, chuỗi là một palindrome và hàm trả về `true`, nếu không sẽ trả về `false`.
- `split('')`: chuyển chuỗi thành mảng các ký tự.
- `reverse()`: đảo ngược mảng.
- `join('')`: nối lại mảng thành chuỗi.