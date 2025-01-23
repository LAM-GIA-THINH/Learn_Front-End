### **Protected Routes (Các tuyến đường được bảo vệ):**

1. **Mục đích:**  
   - Ngăn việc lấy dữ liệu nhạy cảm.  
   - Chỉ cho phép người dùng đã đăng nhập truy cập vào dữ liệu của họ.

2. **Cách tiếp cận:**  
   - Nếu người dùng chưa đăng nhập, chặn các thành phần (components) không được render và chuyển hướng đến trang Đăng nhập.  
   - Vì việc lấy dữ liệu diễn ra trong các thành phần, nếu các thành phần này không được render, việc lấy dữ liệu sẽ không xảy ra.