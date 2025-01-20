# Tham số Truy vấn (Query Parameters)

# Đại diện cho một thay đổi trong giao diện người dùng (UI):
- Sắp xếp, lọc, phân trang
- Được sử dụng như một "nguồn sự thật duy nhất" cho một trạng thái nhất định của ứng dụng.
- Hãy tự hỏi: "Người dùng có thể truy cập lại hoặc chia sẻ trang này y hệt như hiện tại không?" Nếu câu trả lời là "có", bạn có thể xem xét nâng cấp trạng thái đó lên URL trong một tham số truy vấn.

# Các cặp khóa-giá trị trong URL:
- Bắt đầu bằng dấu "?"
- Ví dụ: /vans?type=rugged
- Được phân cách bởi dấu "&":
- Ví dụ: /vans?type=rugged&filterBy=price