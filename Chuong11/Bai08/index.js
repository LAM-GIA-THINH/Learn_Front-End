// Nếu có thể, hãy sử dụng const. Nếu không, hãy dùng let.

// Những biến nào dưới đây nên được đổi từ let sang const?

// Khách hàng muốn đặt một số hàng. Đây là chi tiết:
const basePrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days";

// Oops! Hóa ra việc vận chuyển sẽ phức tạp hơn một chút
shippingCost = 15;
shippingTime = "7-14 days";

// Tính toán giá cuối cùng
const fullPrice = basePrice - discount + shippingCost;

// Cuối cùng, thông báo cho khách hàng
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime);
