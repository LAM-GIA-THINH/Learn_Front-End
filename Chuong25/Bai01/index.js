/* Tôi nghĩ bạn nên chú ý hơn đến thụt dòng mã và tính nhất quán của dấu chấm phẩy */

/* Các hướng dẫn về JavaScript khuyến nghị sử dụng camelCase cho
tên biến và hàm, ví dụ: calculatePrice, finalPrice */
function calculate_price(basePrice) {
    /* Đừng đưa các câu lệnh console.log vào product */
    console.log("Calculating final price...");
    /* Khai báo biến discount với const để tránh việc gán lại giá trị */
    let discount = getDiscount(basePrice)
const final_price = basePrice - discount
return final_price;
}

/* Khai báo getDiscount với const để tránh việc gán lại, hoặc thay đổi thành một hàm có tên rõ ràng */
let getDiscount = function(basePrice) {
    /* Biến này không được sử dụng; hãy xóa nó đi */
    let currentDiscount = 0;
    /* Bạn nghĩ sao về việc trả về giá trị bằng cách sử dụng
    toán tử ternary để làm hàm gọn gàng hơn? */
    if (basePrice > 100) {
        return 20
    } else {
        return 10;
    }
}

console.log(`The final price is $${calculate_price(90)}`)