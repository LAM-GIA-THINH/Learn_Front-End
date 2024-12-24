// function speedWarning(speed){
//     return `You are going at ${speed} mph!`
// }
/*
Thử thách
1. Chỉnh sửa lại hàm này để sử dụng hàm mũi tên.
2. Đảm bảo bạn viết ít mã nhất có thể.
*/
// const speedWarning = speed => `You are going at ${speed} mph!`

// console.log(speedWarning(40))

/*
Thử thách
1. Chỉnh sửa lại hàm này sao cho chỉ cảnh báo
 những người lái xe vượt quá giới hạn tốc độ.
2. Hàm bây giờ cần nhận vào hai tham số. 
Tham số đầu tiên là giới hạn tốc độ, tham số
thứ hai là tốc độ thực tế của người lái xe.
*/

const speedWarning = (speedLimit, speed) => {
    if (speed > speedLimit) {
       return `You are going at ${speed} mph!`
    }
}



console.log(speedWarning(60, 40))

