const playerGuess = 6
const correctAnswer = 6

/*
Thử thách
1. Cải tiến câu lệnh if else để sử dụng toán tử ba ngôi.
let message = ''
if (playerGuess === correctAnswer) {
    message = 'Correct!'
}
else {
    message = 'Wrong!'
}
*/

// const message = playerGuess === correctAnswer ? 'Correct!' : 'Wrong!'

// console.log(message)

/*
Thử thách
1. Bây giờ cải thiện chức năng của mã này bằng cách
   thông báo cho người chơi biết nếu dự đoán của họ quá cao,
   quá thấp, hoặc chính xác.
*/
const message = playerGuess < correctAnswer ? 'Too low!' 
    : playerGuess > correctAnswer ? 'Too high!' 
    : 'Exactly right!'

console.log(message)