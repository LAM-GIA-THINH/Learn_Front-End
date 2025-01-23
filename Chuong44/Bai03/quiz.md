Câu hỏi:  
/* Viết một hàm nhận vào một chuỗi các ký tự và trả về một câu trong đó mỗi ký tự khác nhau sẽ được viết hoa. 
Ví dụ đầu vào: "I'm so happy it's Monday" Ví dụ đầu ra: "I'M So hApPy iT'S MoNdAy" */  
function altCaps(str){  
    return newStr;  
}  
console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

Đáp án:

```javascript
function altCaps(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr += (i % 2 === 0) ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
```

Giải thích:  
- Duyệt qua từng ký tự trong chuỗi.
- Nếu chỉ số của ký tự là số chẵn, viết hoa ký tự đó, nếu không thì viết thường.
- Kết quả là một chuỗi với các ký tự cách nhau được viết hoa/làm thường luân phiên.