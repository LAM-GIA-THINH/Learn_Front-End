let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard +4;
let hasBlackJack = false;

// 1. Tạo một biến tên là isAlive và gán giá trị ban đầu là true
let isAlive = true;

// 2. Đổi giá trị của biến isAlive thành false trong khối mã phù hợp
if (sum <= 20) {
    console.log("Bạn có muốn rút thêm một lá bài không? 🙂");
} else if (sum === 21) {
    console.log("Wohoo! Bạn đã được Blackjack! 🥳");
    hasBlackJack = true;
} else {
    console.log("Bạn đã thua cuộc! 😭");
    isAlive = false; // Thay đổi giá trị của isAlive
}

// 3. Ghi giá trị của biến isAlive ra để kiểm tra
console.log(isAlive);
