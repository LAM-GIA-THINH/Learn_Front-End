let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Lấy nút từ DOM và lưu nó vào một biến
// Sử dụng addEventListener() để lắng nghe sự kiện nhấn nút
// In ra điểm số của Jane khi nút được nhấn (thông qua dữ liệu)
let btn1 = document.getElementById("btn")
btn1.addEventListener("click",  function(){
    console.log(data[0].score);
}) 