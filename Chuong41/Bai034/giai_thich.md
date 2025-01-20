**Liên kết tương đối** trong React Router cho phép các liên kết con sử dụng đường dẫn tương đối so với đường dẫn của phần tử cha của chúng.

*   Ví dụ: một tuyến đường con `income` được lồng trong một tuyến đường cha `/host`, thì liên kết tới `income` sẽ tự động trở thành `/host/income`. Điều này giúp giảm sự cần thiết phải chỉ định các đường dẫn tuyệt đối.
*   Các liên kết điều hướng được tạo trong `host layout` được kết xuất trong tuyến đường `/host`, do đó chúng có thể sử dụng các đường dẫn tương đối. Các liên kết này bao gồm `income`, `vans`, và `reviews`, các liên kết này có thể sử dụng các đường dẫn tương đối như `/income`, `/vans`, và `/reviews`.

Một đường dẫn **`.`** có thể được sử dụng để tham chiếu đến tuyến đường hiện tại. Trong bối cảnh của  `host layout`, khi được hiển thị trên đường dẫn `/host`, sử dụng `.` làm đường dẫn cho liên kết điều hướng sẽ tương đương với việc liên kết đến `/host`.

Việc sử dụng các đường dẫn tương đối cho phép thay đổi tên của một đường dẫn cấp cao hơn (ví dụ: từ `/host` thành `/admin`) mà không cần phải thay đổi các liên kết con, chỉ cần cập nhật đường dẫn gốc.
