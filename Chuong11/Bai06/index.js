// Tái cấu trúc mã để sử dụng .addEventListener()
// khi bạn nhấn vào nút SAVE INPUT

// function saveLead() {
//     console.log("Button clicked!");
// }

// Thêm trình nghe sự kiện
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked!")
})