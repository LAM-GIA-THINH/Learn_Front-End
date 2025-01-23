let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;

// Viết điều kiện theo các quy tắc sau:

// nếu nhỏ hơn hoặc bằng 20 -> "Bạn có muốn rút thêm một lá bài không? 🙂"
// nếu đúng bằng 21         -> "Wohoo! Bạn đã được Blackjack! 🥳"
// nếu lớn hơn 21           -> "Bạn đã thua cuộc! 😭"
if(sum<=20){
    console.log("Bạn có muốn rút thêm một lá bài không? 🙂");
}else if(sum == 21){
    console.log("Wohoo! Bạn đã được Blackjack! 🥳");
}else{
    console.log("Bạn đã thua cuộc! 😭");
}