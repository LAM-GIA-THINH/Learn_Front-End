1. **Chúng ta đã thay đổi định nghĩa route như thế nào để "bảo vệ" các route nhất định khỏi người dùng chưa đăng nhập?**  
   - Bao bọc các route mà chúng ta muốn bảo vệ trong một Layout route chứa logic để chuyển hướng người dùng nếu họ chưa đăng nhập.

2. **Chúng ta có thể sử dụng thành phần nào để tự động chuyển hướng người dùng đến một route khác trong ứng dụng?**  
   - `<Navigate to="/login" />`

3. **Chúng ta có thể render thành phần nào nếu người dùng ĐÃ đăng nhập?**  
   - `<Outlet />`