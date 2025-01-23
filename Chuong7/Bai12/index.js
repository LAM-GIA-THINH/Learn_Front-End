// Thay đổi nội dung của phần tử `count-el` trong HTML để phản ánh số đếm mới

// camelCase: Đặt tên biến theo quy ước camelCase
let countEl = document.getElementById("count-el"); // Truyền tham số để lấy phần tử

let count = 0; // Biến đếm, bắt đầu từ 0

// Tạo một hàm `increment` để tăng giá trị đếm
function increment() {
    count = count + 1; // Tăng giá trị của `count` lên 1
    countEl.innerText = count; // Cập nhật nội dung của phần tử `count-el`
}