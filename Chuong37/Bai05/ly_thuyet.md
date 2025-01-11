Hoạt động của Ứng dụng

Lấy dữ liệu từ API:
Image Flip API cung cấp một endpoint trả về 100 hình ảnh meme phổ biến nhất.
Khi ứng dụng được tải lên, một yêu cầu fetch sẽ được gửi đến API để lấy dữ liệu.
Kết quả là một mảng các hình ảnh meme, được lưu trữ trong local state của React.

Hiển thị Meme Ngẫu Nhiên:
Khi người dùng nhấn nút "Get a new meme image", ứng dụng sẽ:
Chọn ngẫu nhiên một meme từ mảng hình ảnh đã lưu trong state.
Hiển thị meme đó trên giao diện.

Tần suất gọi API:
API chỉ được gọi một lần duy nhất khi ứng dụng tải lên (mount component).
Liên quan đến Lập trình Hàm và Side Effects

Trong lập trình hàm, side effect là những hành động nằm ngoài chức năng của hàm thuần túy, chẳng hạn:
Gửi yêu cầu HTTP.
Ghi dữ liệu vào tệp hoặc cơ sở dữ liệu.
Thay đổi trạng thái bên ngoài của ứng dụng.
Side Effect trong React

Trong React, việc lấy dữ liệu từ API được coi là một side effect, vì:
Nó tương tác với thế giới bên ngoài (API).
Kết quả của nó không thể đoán trước nếu không thực thi.
React xử lý side effects thông qua hooks, cụ thể là useEffect.

