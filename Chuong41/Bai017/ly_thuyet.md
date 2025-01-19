### Nested Routes: ### 
- Đây là một khái niệm trong lập trình web, đặc biệt là khi làm việc với các thư viện định tuyến như React Router, Vue Router. Nó mô tả cách sắp xếp các tuyến đường trong một ứng dụng web theo cấu trúc cây, tức là một tuyến đường có thể chứa các tuyến đường con bên trong nó.
### Nested URL: ###
- Là những URL có cấu trúc dạng "/cha/con", trong đó "/cha" là tuyến đường cha và "/con" là tuyến đường con. Ví dụ: /van là tuyến đường cha và /van/van-id-or-name là tuyến đường con của /van.

### Shared UI: ###
- Là những phần giao diện người dùng (ví dụ: thanh điều hướng, sidebar) được hiển thị ở nhiều tuyến đường con khác nhau của cùng một tuyến đường cha. Điều này giúp tiết kiệm code và tạo ra giao diện thống nhất cho ứng dụng.

### Nesting <Route> ###

1. Có thể sử dụng cả <Route /> hoặc <Route>...</Route>
2. Khi bạn muốn giữ nguyên một số phần tử giao diện (UI) trên trang nhưng vẫn muốn hiển thị thêm các phần tử khác.
3. Khi bạn muốn tránh lặp lại trong việc định nghĩa các route.