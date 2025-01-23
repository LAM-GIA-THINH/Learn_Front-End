let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
if(sum<=20){
    console.log("Bạn có muốn rút thêm một lá bài không? 🙂");
}else if(sum == 21){
    console.log("Wohoo! Bạn đã được Blackjack! 🥳");
    hasBlackJack = true
}else{
    console.log("Bạn đã thua cuộc! 😭");
}

// RÚT TIỀN!
console.log(hasBlackJack)