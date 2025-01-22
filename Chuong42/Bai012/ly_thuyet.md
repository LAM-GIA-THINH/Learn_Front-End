### **React.memo() là gì?**
- Là một **Higher-Order Component (HOC)** được React cung cấp.
  - **Higher-order function** là hàm nhận một hàm khác làm tham số, ví dụ như `.map()`, `.filter()`,...
  - **HOC** là một hàm nhận một component làm tham số, thêm tính năng đặc biệt vào nó, rồi trả về phiên bản nâng cấp của component đó.

---

### **React.memo() làm gì?**
- Ghi nhớ (**memoize**) một component nếu **props** không thay đổi giữa các lần render.
- **Lưu ý:** Giai đoạn render trong React không thường xuyên chậm/đắt đỏ. Quan trọng hơn là **sửa lỗi render chậm** trước khi lo giảm số lần render.

---

### **Mục đích của React.memo()**
- Giảm bớt các lần render không cần thiết.

---