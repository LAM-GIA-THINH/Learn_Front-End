// Tạo một hàm render ba hình ảnh đội
// Sử dụng vòng lặp for, template strings (``), toán tử cộng gán (+=)
// và .innerHTML để giải quyết bài toán

const imgs = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg"
]
let container = document.getElementById("container")
function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()