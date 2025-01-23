let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

// 1. Tạo một hàm save() để ghi lại giá trị của count khi hàm được gọi
function save() {
    console.log(count); // In ra giá trị của count trong console
}
