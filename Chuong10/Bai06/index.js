let hands = ["rock", "paper", "scissor"];

// Tạo một hàm trả về một phần tử ngẫu nhiên từ mảng
function getRandomHand() {
    let randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
}

// Gọi hàm để kiểm tra
console.log(getRandomHand());
