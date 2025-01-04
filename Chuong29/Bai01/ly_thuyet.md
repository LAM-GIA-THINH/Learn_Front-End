---

### JavaScript Đồng Bộ (Synchronous JavaScript)

- Mỗi lệnh phải hoàn thành trước khi lệnh tiếp theo có thể thực thi.
- Không có hai lệnh nào có thể chạy đồng thời cùng một lúc.
- Ví dụ: vòng lặp `for`, `console.log()`, khai báo biến, và hầu như mọi thứ khác trong JavaScript.

---

### JavaScript "Bất Đồng Bộ" (Asynchronous JavaScript)

- Code có thể chạy "không theo thứ tự". Cho phép một thao tác kéo dài bắt đầu trước, nhưng hoàn thành sau vào thời điểm khác mà không chặn các đoạn code khác đang chạy trong khi đó.

---

### Tại Sao Cần "Bất Đồng Bộ"?

- JavaScript không thực sự bất đồng bộ, nhưng có các cơ chế "callback" (hàm gọi lại) để chạy các lệnh theo thứ tự khác nhằm tăng hiệu quả.
- "Đơn luồng" (Single-threaded) có nghĩa là chỉ một lệnh có thể chạy tại một thời điểm.

---

VD: Bạn đun sôi nồi nước. Trong lúc chờ nước sôi bạn có thể làm những việc khác và quay lại khi nước đã sôi.