# useMemo()

**Mục đích:**
- Để ghi nhớ các giá trị đã được tính toán giữa các lần render

**Khi nào nên sử dụng:**
- Tránh tính toán lại các phép tính tốn kém (expensive calculations) khi không cần thiết
- Duy trì sự bằng nhau về tham chiếu của một kiểu dữ liệu phức tạp giữa các lần render
