// 1. Lấy box từ DOM và lưu nó vào một biến
// 2. Thêm một trình nghe sự kiện click vào hộp
// 3. Ghi ra "Tôi muốn mở hộp!" khi hộp được nhấp
let getBox = document.getElementById("box")

getBox.addEventListener("click", function() {
    console.log("Tôi muốn mở hộp!")
})
