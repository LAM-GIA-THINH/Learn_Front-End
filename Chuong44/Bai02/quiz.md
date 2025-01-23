Câu hỏi: 

Viết một hàm `whisper` nhận vào một câu và trả về một câu mới với tất cả chữ cái in thường, bắt đầu bằng "shh...", 
và loại bỏ dấu chấm than nếu có ở cuối câu.

Ví dụ:
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Gợi ý: sử dụng `endsWith` và `slice`.

---

Đáp án:

```javascript
function whisper(sentence) {
    if (sentence.endsWith('!')) {
        sentence = sentence.slice(0, -1);
    }
    return 'shh... ' + sentence.toLowerCase();
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
```

Giải thích:
1. Hàm `whisper` kiểm tra xem câu có kết thúc bằng dấu chấm than không bằng cách sử dụng `endsWith('!')`.
2. Nếu có, hàm loại bỏ dấu chấm than bằng cách dùng `slice(0, -1)`.
3. Sau đó, hàm chuyển toàn bộ câu về chữ cái in thường bằng `toLowerCase()` và thêm "shh..." vào đầu câu trước khi trả về.