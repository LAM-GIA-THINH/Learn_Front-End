let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function() {
    // Thách thức:
    // Khi người dùng nhấn nút "Pick Fighters", chọn ngẫu nhiên hai emoji 
    // và hiển thị chúng như "🦀 vs 🐢" trong thẻ <div> có id "stage".
    let randomIndex1 = Math.floor(Math.random() * fighters.length);
    let randomIndex2 = Math.floor(Math.random() * fighters.length);
    let result = fighters[randomIndex1] + "vs" + fighters[randomIndex2]
    stageEl.textContent = result;
    // Chọn hai emoji ngẫu nhiên
});