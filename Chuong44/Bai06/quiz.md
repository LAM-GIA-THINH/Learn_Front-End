Câu hỏi:  
/* Emojify!

Các dịch vụ phổ biến như Slack và Github cho phép sử dụng các shortcode emoji, có nghĩa là chúng sẽ phát hiện khi một từ 
trong câu bắt đầu và kết thúc bằng dấu hai chấm (:)
và tự động thay thế từ đó bằng một emoji.

Các shortcode này cho phép người dùng thêm emoji vào tin nhắn của họ bằng cách gõ một mã thay vì tìm kiếm một emoji trong danh sách.

Ví dụ, gõ :smile: sẽ thay thế văn bản đó bằng 😊
*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

/* 1. Viết một hàm kiểm tra xem một từ viết thường có bắt đầu và kết thúc bằng dấu hai chấm hay không. Nếu có, loại bỏ dấu hai chấm và
tra cứu từ đó trong đối tượng emoji. Nếu từ đó có trong đối tượng emojis, trả về emoji tương ứng.
Nếu không, trả về từ gốc.

Ví dụ đầu vào: ":party:"
Ví dụ đầu ra: 🎉

Ví dụ đầu vào: ":flower:"
Ví dụ đầu ra: "flower"

Ví dụ đầu vào: "elephant"
Ví dụ đầu ra: "elephant"
*/  

function emojifyWord(word){
    if (word.startsWith(":") && word.endsWith(":")) {
        const emojiCode = word.slice(1, -1); // Loại bỏ dấu hai chấm
        return emojis[emojiCode] || word; // Nếu có emoji, trả về emoji, nếu không trả về từ gốc
    }
    return word;
}

/* 2. Viết một hàm để tìm bất kỳ shortcode emoji nào trong một câu.
Hàm của bạn nên duyệt qua mỗi từ trong câu, emojify bất kỳ từ nào
bắt đầu và kết thúc bằng dấu hai chấm, rồi trả về câu đã được emojify. 
Cảm thấy tự do sử dụng hàm emojify từ bài tập trước!

Ví dụ đầu vào: "I :heart: my :cat:"
Ví dụ đầu ra: "I 💜 my 🐱"

Ví dụ đầu vào: "I :heart: my elephant"
Ví dụ đầu ra: "I 💜 my elephant"
*/  

function emojifyPhrase(phrase){
    return phrase.split(' ').map(emojifyWord).join(' '); // Chia câu thành từng từ và áp dụng emojifyWord
}

// Kiểm tra các hàm
console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
```

Giải thích:
- `emojifyWord`: Hàm này kiểm tra nếu từ bắt đầu và kết thúc bằng dấu hai chấm. Nếu có, loại bỏ dấu hai chấm và tra cứu từ trong đối tượng `emojis`. Nếu tìm thấy, trả về emoji, nếu không trả về từ gốc.
- `emojifyPhrase`: Hàm này chia câu thành từng từ, gọi hàm `emojifyWord` cho mỗi từ và nối các từ lại thành một câu đã được emojify.