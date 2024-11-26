// Thử thách:
// Phương thức toFixed() không còn hoạt động nữa. Bạn có thể làm cho nó hoạt động trở lại không?
// Tìm kiếm thông báo lỗi nếu bạn không chắc chắn cách thực hiện

const totalPrice = "420.69235632455"
const btn = document.getElementById("buy-btn")
btn.textContent = `Buy €${ Number(totalPrice).toFixed(2) }`;

