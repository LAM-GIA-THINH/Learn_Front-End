Câu hỏi:  
/* We Come in Peace!  
Chúng ta đã nhận được một thông điệp hòa bình và tình anh em từ một hành tinh ngoài hành tinh. Họ gần như làm đúng, nhưng các thông điệp lại bị đảo ngược.  
Viết các hàm để đảo ngược các thông điệp bị đảo ngược này để chúng ta có thể đọc được những gì họ muốn nói!  
*/

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

/* Step 1: Đảo ngược một chuỗi  
Viết một hàm nhận vào một chuỗi và trả về chuỗi đó sau khi đảo ngược.  
Một người phỏng vấn có thể muốn kiểm tra xem bạn có biết các phương thức chuỗi, hoặc có thể muốn biết bạn có thể đảo ngược một chuỗi thủ công hay không.  
Hãy luyện tập cả hai cách!  

Ví dụ đầu vào: !htrae ot emocleW  
Ví dụ đầu ra: Welcome to earth!  
*/  

function reverseString(str){
    return str.split('').reverse().join('');
}

/*  
Step 2: Bây giờ chúng ta sẽ đảo ngược tất cả chuỗi trong một mảng.  
Viết một hàm nhận vào một mảng các chuỗi và trả về một mảng mới với tất cả các chuỗi đã được đảo ngược.  

Bạn có thể tái sử dụng hàm reverseString(), sử dụng các phương thức chuỗi, hoặc đảo ngược chuỗi thủ công.  
*/  

function reverseStringsInArray(arr){
    return arr.map(reverseString);
}

console.log(reverseString(title)); // Đảo ngược chuỗi title
console.log(reverseStringsInArray(messages)); // Đảo ngược tất cả các chuỗi trong mảng messages
```

Giải thích:
- `reverseString`: Hàm này sử dụng các phương thức chuỗi `split('')`, `reverse()`, và `join('')` để đảo ngược một chuỗi.
- `reverseStringsInArray`: Hàm này sử dụng `map()` để áp dụng hàm `reverseString` cho từng phần tử trong mảng `arr`, trả về một mảng mới với các chuỗi đã được đảo ngược.