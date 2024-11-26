// Thử thách:
// Làm tròn giá trong nút xuống hai chữ số thập phân.
// Không biết nên dùng phương pháp nào? Hãy tìm trên Google!

const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${ totalPrice.toFixed(2) }`;


