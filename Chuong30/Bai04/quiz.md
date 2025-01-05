# Câu đố về promise đã được giải quyết

1. Promise là gì (theo cách hiểu của bạn)?  
Lời hứa rằng một thao tác thường mất một chút thời gian để thực hiện sẽ hoàn thành. I.O.U. (Tôi nợ bạn một điều gì đó)

2. Phần nào trong mã chúng ta đã viết là một promise?  
Yêu cầu `fetch` trả về một đối tượng promise.

3. Ba trạng thái mà một promise có thể ở là gì?  
(1) Đang chờ xử lý (Pending), (2) Đã hoàn thành (Resolved/Fulfilled), (3) Bị từ chối (Rejected)

4. Điều đó có nghĩa là gì khi một promise "đã được giải quyết" (hoặc hoàn thành)?  
Nhiệm vụ mà chúng ta muốn thực hiện đã hoàn thành thành công.

5. Làm thế nào để chúng ta bảo mã thực hiện điều gì đó chỉ SAU KHI promise được giải quyết?  
Sử dụng phương thức `.then()`.

?? - Làm thế nào để xử lý một promise bị từ chối?  
