// Khi người dùng nhấp vào nút mua hàng thì in ra
// "Đã xảy ra lỗi, vui lòng thử lại" trong đoạn văn
// có id="error".
let errorParagraph = document.getElementById("error")
function purchase(){
    console.log("Đã nhấn nút");
    errorParagraph.textContent = "Đã xảy ra lỗi, vui lòng thử lại"
}