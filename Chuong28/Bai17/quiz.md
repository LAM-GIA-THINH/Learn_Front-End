1. "Stateless" có nghĩa là gì đối với server?
Server sẽ quên đi tương tác sau khi phản hồi được gửi.

* Trong ví dụ Mike's Bikes, bạn sẽ sử dụng URL endpoint nào (và phương thức yêu cầu)
  để thực hiện các tác vụ sau:

    2. Lấy danh sách tất cả các chiếc xe đạp đang được bán?
       GET /bikes

    3. Lấy thông tin chi tiết về chiếc xe đạp có ID là 42?
       GET /bikes/42

    4. Cập nhật giá của chiếc xe đạp có ID là 21?
       PUT /bikes/21

    5. Thêm một chiếc xe đạp mới vào danh sách xe đạp đang bán?
       POST /bikes

    6. Xóa chiếc xe đạp có ID là 56 khỏi danh sách xe đạp?
       DELETE /bikes/56
