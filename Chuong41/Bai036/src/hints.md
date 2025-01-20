1. **Route `/host/vans/:id` của bạn cần phải là route cha của các route lồng nhau khác như `/host/vans/:id/pricing`**
   **và `/host/vans/:id/photos`.**  
   Chế độ xem chi tiết thông tin sẽ hiển thị tại `/host/vans/:id`; nói cách khác, nó sẽ là chế độ xem mặc định xuất hiện gần cuối khi ai đó nhấp vào một chiếc van từ `/host/vans`.

   (XEM TIẾP GỢI Ý TIẾP THEO NẾU CẦN)

2. **Bạn sẽ cần thêm một `Outlet` vào tệp `HostVanDetail.jsx`, vì đó là nơi các chế độ xem lồng nhau sẽ được hiển thị.**  
   Chế độ xem "Details", được hiển thị tự động khi người dùng truy cập `/host/vans/:id`, sẽ là route `index`, là một route con của route cha `/host/vans/:id`.