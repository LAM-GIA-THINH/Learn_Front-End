const container = document.getElementById("container");

container.innerHTML = "<button onclick='buy()'>Buy!</button>";

// Khi nhấn vào nút, hiển thị một đoạn văn dưới nút (trong container)
// nói "Cảm ơn bạn đã mua hàng!"
function buy(){
    container.innerHTML += "<p>Thank you for buying!</p>"
}