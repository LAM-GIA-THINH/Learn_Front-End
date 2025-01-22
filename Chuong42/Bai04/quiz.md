Hãy dịch từng phần:

**Giới thiệu:**
Chúng ta thường nói nhiều về "rendering" trong React, nhưng thường gộp chung 3 giai đoạn của quá trình render lại với nhau. Việc hiểu rõ sự khác biệt giữa các giai đoạn này có thể giúp chúng ta xác định chiến lược tốt để cải thiện hiệu suất của các ứng dụng React.

**1. Ba giai đoạn của quá trình rendering trong React là gì?**
1. Render (Tạo)
2. Reconciliation (Điều hòa/So sánh)
3. Commit (Cập nhật)

**2. Điều gì xảy ra trong giai đoạn Render?**
React chạy code từ component có state thay đổi và tất cả các component con của component đó.

**3. Điều gì xảy ra trong giai đoạn Reconciliation?**
React so sánh kết quả render cũ với kết quả render mới (trong Virtual DOM) bằng thuật toán diffing để xác định những thay đổi cần được thực hiện trên DOM thật.

**4. Điều gì xảy ra trong giai đoạn Commit?**
Những thay đổi được xác định từ giai đoạn reconciliation sẽ được thực sự commit (vẽ) lên DOM thật, và người dùng sẽ thấy các cập nhật trên trang.

Tất cả quá trình này giống như một quy trình làm việc:
1. Thiết kế (Render)
2. Kiểm tra và so sánh (Reconciliation)
3. Thực hiện thay đổi (Commit)