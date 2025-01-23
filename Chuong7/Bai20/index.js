// 1. Lấy phần tử có id "save-el" và lưu vào một biến gọi là saveEl
let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el")
function increment() {
    count += 1;
    countEl.textContent = count;
}
//khác biệt giữa textContent và innerText
function save() {
    // 2. Tạo một biến chứa cả giá trị của count và dấu gạch ngang, ví dụ: "12 - "
    let countStr = count + " - " // Biến lưu giá trị "count" và dấu gạch ngang
    // 3. Hiển thị biến trong saveEl sử dụng textContent
    // Lưu ý: Đảm bảo không xóa nội dung hiện tại của đoạn văn
    saveEl.textContent += countStr
    console.log(count);
}
