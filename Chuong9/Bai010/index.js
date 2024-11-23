let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard + 4;
let hasBlackJack = false;
let isAlive = true;

// 1. Khai báo một biến tên là message và gán giá trị ban đầu là một chuỗi rỗng
let message = "";

// 2. Gán lại giá trị cho biến message với chuỗi mà chúng ta sẽ ghi ra
if (sum <= 20) {
    message = "Bạn có muốn rút thêm một lá bài không? 🙂";
} else if (sum === 21) {
    message = "Wohoo! Bạn đã được Blackjack! 🥳";
    hasBlackJack = true;
} else {
    message = "Bạn đã thua cuộc! 😭";
    isAlive = false;
}

// 3. Ghi giá trị của message ra!
console.log(message);
