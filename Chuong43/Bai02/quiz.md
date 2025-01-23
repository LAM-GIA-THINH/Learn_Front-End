**Q: Sự khác biệt giữa `const`, `let` và `var` là gì?**

**A:**  
1. **`var`**:
   - Có phạm vi trong **hàm**.
   - Có thể khai báo lại và cập nhật giá trị.
   - **Hoisted** (có thể truy cập trước khi khai báo nhưng giá trị là `undefined`).

2. **`let`**:
   - Có phạm vi trong **khối**.
   - Không thể khai báo lại trong cùng phạm vi, nhưng có thể cập nhật giá trị.
   - **Hoisted** nhưng không khởi tạo (gây lỗi `ReferenceError` nếu truy cập trước khi khai báo).

3. **`const`**:
   - Có phạm vi trong **khối**.
   - Không thể khai báo lại hoặc cập nhật giá trị (đối với giá trị nguyên thủy).
   - Với **đối tượng** và **mảng**, không thay đổi tham chiếu được, nhưng có thể thay đổi thuộc tính hoặc phần tử bên trong.  
   - **Hoisted** nhưng không khởi tạo.