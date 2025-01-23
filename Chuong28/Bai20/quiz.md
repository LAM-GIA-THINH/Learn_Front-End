Tại Mike's Bikes, họ cũng bán giá đỡ xe đạp (endpoint là /bikeracks).

Bạn mong đợi các endpoint sẽ như thế nào cho các tác vụ sau:

1. Lấy danh sách tất cả các giá đỡ xe đạp được bán trên trang web?
   /bikeracks

2. Lấy danh sách tất cả các giá đỡ xe đạp có sẵn tại cửa hàng vật lý ngay bây giờ?
   (Giả sử có một query gọi là "available" với giá trị boolean true/false)
   /bikeracks?available=true  ==> {available: "true"} (Sẽ được phân tích cú pháp như một chuỗi)

3. Lấy danh sách tất cả các giá đỡ xe đạp của thương hiệu "Thule" có thể chứa 4 chiếc xe đạp?
   (Giả sử có các query "brand" và "numBikes")
   /bikeracks?brand=thule&numBikes=4
