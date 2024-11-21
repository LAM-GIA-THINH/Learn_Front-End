let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
// Tạo bốn hàm: add(), subtract(), divide(), multiply().
// Gọi hàm đúng khi người dùng nhấp vào một trong các nút.
// Thực hiện phép tính đã cho bằng num1 và num2.
// Hiển thị kết quả phép tính trong đoạn văn có id="sum-el".
let result = document.getElementById("sum-el");
function add() {
    let sum = 0
    sum = num1 + num2
    result.textContent = sum
}
function subtract() {
    let sum = 0
    sum = num1 - num2
    result.textContent = sum
}
function divide() {
    let sum = 0
    sum = num1 / num2
    result.textContent = sum
}
function multiply() {
    let sum = 0
    sum = num1 * num2
    result.textContent = sum
}
