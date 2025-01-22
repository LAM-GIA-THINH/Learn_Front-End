**1. Render Phase (Tạo Order):**
- Giống như nhà bếp nhận order và lên thực đơn mới
- React chạy lại code và tạo ra một "thực đơn ảo" mới (Virtual DOM mới)
- Ở giai đoạn này, React chưa thực hiện thay đổi nào trên giao diện thực (DOM thật)

**2. Reconciliation Phase (So sánh):**
- Giống như bếp trưởng so sánh order mới với món đang làm
- React so sánh Virtual DOM mới và cũ để tìm ra điểm khác biệt
- Xác định chính xác những gì cần thay đổi
- Ví dụ: chỉ cần thay thịt gà thành thịt bò, không cần đổi cơm và rau

**3. Commit Phase (Cập nhật):**
- Giống như bếp thực hiện thay đổi và đưa món ra cho khách
- React cập nhật DOM thật với những thay đổi đã xác định
- Trình duyệt vẽ lại giao diện với những thay đổi mới
- Người dùng nhìn thấy giao diện mới

**Nhớ rằng:**
- Phase 1 và 2 xử lý trong bộ nhớ, rất nhanh
- Chỉ Phase 3 mới thực sự tác động đến giao diện người dùng
- React cố gắng tối ưu bằng cách chỉ cập nhật những gì thực sự thay đổi
