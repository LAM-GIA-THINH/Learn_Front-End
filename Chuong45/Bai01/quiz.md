**Sự khác biệt giữa DOM ảo và DOM “thực” là gì?**

**DOM ảo (Virtual DOM)**  
- Không thể trực tiếp cập nhật HTML.  
- Hoạt động như một bản sao của DOM thật, có thể thường xuyên được thao tác và cập nhật mà không cần tải lại trang.  
- Là một mô hình hơn là một công nghệ cụ thể.  
- Đồng bộ với DOM thật qua `react-dom`.  

**DOM "thật" (Real DOM)**  
- Trực tiếp cập nhật và thao tác HTML.  
- Tạo một DOM mới/hoặc vẽ lại toàn bộ nếu được cập nhật.  
- Là một đại diện dựa trên đối tượng của tài liệu HTML + giao diện để thao tác với đối tượng đó.  

**Virtual DOM có giống với Shadow DOM không?**
**Không**
- Virtual DOM: Tập trung vào hiệu năng, giúp tối ưu hóa việc cập nhật giao diện.
- Shadow DOM: Tập trung vào đóng gói, giúp bảo vệ thành phần khỏi các tác động từ bên ngoài.

