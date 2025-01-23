// Kiểm tra xem người đó có đủ điều kiện nhận thiệp sinh nhật từ nhà vua hay không! (100 tuổi)

let age = 100;

// nếu dưới 100 tuổi        -> "Không đủ điều kiện"
// nếu đúng 100 tuổi        -> "Đây là thiệp sinh nhật của bạn từ nhà vua!"
// nếu trên 100 tuổi        -> "Không đủ điều kiện, bạn đã nhận được một tấm rồi"
if (age < 100) {
    console.log("Không đủ điều kiện");
// thử == và ===
} else if (age === 100) {
    console.log("Đây là thiệp sinh nhật của bạn từ nhà vua!");
} else {
    console.log("Không đủ điều kiện, bạn đã nhận được một tấm rồi");
}
