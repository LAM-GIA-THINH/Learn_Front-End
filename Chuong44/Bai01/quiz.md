Tạo một hàm PANIC! Hàm này sẽ nhận vào một câu và trả về cùng câu đó viết hoa hoàn toàn với dấu chấm than (!) ở cuối. Sử dụng các phương thức chuỗi có sẵn trong JavaScript.

Nếu đây là một cụm từ hoặc câu, thêm emoji 😱 ở giữa mỗi từ.

Ví dụ đầu vào: "Xin chào"
Ví dụ đầu ra: "XỊNCHÀO!"

Ví dụ đầu vào: "Tôi gần hết cà phê" 
Ví dụ đầu ra: "TÔI 😱 GẦN 😱 HẾT 😱 CÀ 😱 PHÊ!"

Đây là hàm PANIC! trong JavaScript:

function panic(sentence) {
  return sentence.toUpperCase() + "!";
}

Nếu đây là một câu, hãy thêm emoji 😱 giữa mỗi từ:

function panic(sentence) {
  return sentence.split(" ").join(" 😱 ").toUpperCase() + "!";
}

Ví dụ:
panic("Hello") // "HELLO!"
panic("I'm almost out of coffee") // "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"