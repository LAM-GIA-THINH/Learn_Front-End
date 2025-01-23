let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard + 4;
let hasBlackJack = false;
let isAlive = true;

let message = "";
if (sum <= 20) {
    message = "Bạn có muốn rút thêm một lá bài không? 🙂";
} else if (sum === 21) {
    message = "Wohoo! Bạn đã được Blackjack! 🥳";
    hasBlackJack = true;
} else {
    message = "Bạn đã thua cuộc! 😭";
    isAlive = false;
}
console.log(message);
