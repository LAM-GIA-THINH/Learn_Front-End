**Q: Sự khác biệt giữa `==` và `===` là gì?**

**A:**  
1. **`==` (Toán tử so sánh bằng lỏng lẻo):**  
   - Chỉ so sánh **giá trị**, tự động thực hiện ép kiểu khi cần.  
   - Ví dụ: `5 == "5"` → `true` (vì `"5"` được ép kiểu thành số).

2. **`===` (Toán tử so sánh bằng nghiêm ngặt):**  
   - So sánh cả **giá trị** và **kiểu dữ liệu**, không thực hiện ép kiểu.  
   - Ví dụ: `5 === "5"` → `false` (vì kiểu dữ liệu khác nhau).

**Nên dùng `===`** để tránh những hành vi không mong muốn do ép kiểu tự động.