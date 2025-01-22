# useMemo()

**Mục đích:**
- Để ghi nhớ các giá trị đã được tính toán giữa các lần render

**Khi nào nên sử dụng:**
- Tránh tính toán lại các phép tính tốn kém (expensive calculations) khi không cần thiết

Việc sử dụng useMemo() đặc biệt hữu ích khi:
1. Bạn có các phép tính phức tạp, tốn nhiều tài nguyên
2. Muốn tránh việc tính toán lại không cần thiết giữa các lần render
3. Cần cải thiện hiệu năng của ứng dụng