// Thử thách:
// Biểu thức sau đây dùng để tính tổng chi phí của một chuyến đi, nhưng nó gặp vấn đề. 
// Nó trả về kết quả 548, nhưng tôi nghĩ con số này quá rẻ. 
// Hãy xem qua và tìm hiểu xem vấn đề của chúng ta là gì với thứ tự ưu tiên của toán tử, 
// sau đó chỉnh sửa để chúng ta log ra chi phí chính xác của chuyến đi.
const tripLengthDays = 2
const tripDistanceKM = 300
const fuelPricePerKM = 1.5
const hotelCostPerNight = 60
const hotelDiscountPerNight = 6
const foodCost = 50
// const totalCost = foodCost + tripDistanceKM * fuelPricePerKM + hotelCostPerNight - hotelDiscountPerNight * tripLengthDays
const totalCost = foodCost + tripDistanceKM * fuelPricePerKM + (hotelCostPerNight - hotelDiscountPerNight) * tripLengthDays

console.log(totalCost)