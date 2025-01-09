React State
State đề cập đến các giá trị được quản lý bởi component, 
tương tự như các biến được khai báo bên trong một hàm. 
Bất cứ khi nào bạn có các giá trị thay đổi cần được lưu trữ/hiển thị, rất có thể bạn sẽ sử dụng state.

"Xem như một hàm của state"

01. Render
React chạy hàm của bạn và hiển thị bất cứ thứ gì được trả về.
Hàm sẽ chỉ được chạy lại nếu:
(1) Nó nhận các props mới từ bên trên, hoặc
(2) Giá trị state nội bộ của nó thay đổi.

02. setState
Thay đổi một biến không thuộc state sẽ không làm React render lại component.
Thay đổi state bằng hàm setState tích hợp sẵn sẽ làm điều đó.

03. view = function(state)
Do đó, khi state thay đổi và React chạy lại (re-render) component của bạn, một cái gì đó mới được trả về và thay thế những gì đã hiển thị trên trang trước đó.

Ví dụ công tắc bóng đèn:
Ban đầu: Công tắc ở trạng thái OFF, bóng đèn tắt.
Bạn thay đổi state: Bật công tắc sang ON.
React cập nhật state, re-render giao diện, và bóng đèn sáng.
State thay đổi → View thay đổi: Tất cả đều được tự động xử lý bởi React.