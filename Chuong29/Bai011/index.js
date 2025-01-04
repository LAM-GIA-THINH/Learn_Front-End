/**
 * Thử thách: chuỗi phương thức!
 * 
 * 1. Chọn nút trong DOM và thêm một trình lắng nghe sự kiện cho nó mà không lưu trữ phần tử DOM dưới dạng biến riêng. 
 * Nghĩa là "chuỗi" phương thức `addEventListener` ngay sau `getElementById()` (Khi nhấp, ghi "Clicked" vào console)
 *    - Tôi nhận ra điều này có thể cảm thấy như công việc vô ích, nhưng ý định của tôi sẽ hợp lý ngay sau đây
 * 
 * 2. Với mảng dưới đây, chuỗi các phương thức `.filter` và `.map` lại với nhau để biến mảng thành một mảng các địa chỉ email 
 * dạng chuỗi của những người trong mảng đã bỏ phiếu. Ghi mảng các địa chỉ email vào console
 */

// document.getElementById("new-deck").addEventListener("click", function() {
//     console.log("Clicked!")
// })

const voters = [
    {name: "Joe", email: "joe@joe.com", voted: true},
    {name: "Jane", email: "jane@jane.com", voted: true},
    {name: "Bo", email: "bo@bo.com", voted: false},
    {name: "Bane", email: "bane@bane.com", voted: false}
]

// Viết code
const finalResult = voters.filter(voter => voter.voted).map(voter => voter.email)
console.log(finalResult)

// Final result: ["joe@joe.com", "jane@jane.com"]