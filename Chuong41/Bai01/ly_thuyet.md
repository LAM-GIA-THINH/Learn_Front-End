**Điểm khác biệt giữa ứng dụng đa trang (multi-page application - MPA) và ứng dụng một trang (single-page application - SPA):**

*   **Ứng dụng đa trang (MPA):**
    *   Khi người dùng truy cập một trang web (ví dụ: `mysite.com`), trình duyệt gửi yêu cầu đến máy chủ.
    *   Máy chủ xử lý yêu cầu, tìm kiếm trang HTML tương ứng, cùng với CSS, JavaScript, và có thể truy vấn cơ sở dữ liệu hoặc API.
    *   Máy chủ gửi lại trang HTML hoàn chỉnh cho trình duyệt, và trình duyệt hiển thị trang web.
    *   Khi người dùng chuyển sang một trang khác (ví dụ: `mysite.com/about`), trình duyệt sẽ gửi một yêu cầu mới đến máy chủ, và quá trình tương tự sẽ lặp lại.
    *   Toàn bộ trang cũ bị loại bỏ và thay thế bằng trang mới, thường gây ra hiện tượng "nhấp nháy" khi chuyển trang.
*  **Ứng dụng một trang (SPA):**
    *   Trình duyệt chỉ tải một tài liệu web duy nhất một lần.
    *   Khi truy cập trang web lần đầu, máy chủ không gửi lại trang HTML hoàn chỉnh, mà gửi một ứng dụng React.
    *   Ứng dụng React này được tải vào trình duyệt, và các thay đổi trang sau đó được thực hiện bởi chính ứng dụng, thay vì yêu cầu một trang mới từ máy chủ.
    *   Khi người dùng chuyển trang (ví dụ: từ trang chủ sang trang "about"), ứng dụng React có thể cập nhật nội dung trang hiện tại mà không cần tải lại toàn bộ trang, tránh được hiện tượng "nhấp nháy".
    *   Nếu trang mới cần dữ liệu bổ sung, ứng dụng có thể gửi yêu cầu đến máy chủ để lấy dữ liệu JSON, sau đó cập nhật trang. Ví dụ, trang danh sách "vans" có thể hiển thị giao diện cơ bản trước, sau đó cập nhật dữ liệu từ máy chủ.

**Tóm lại:**

Điểm khác biệt chính giữa MPA và SPA là MPA tải lại toàn bộ trang web từ máy chủ mỗi khi chuyển trang, còn SPA chỉ tải một trang ban đầu và sau đó cập nhật nội dung trên trang đó một cách linh hoạt. Điều này giúp SPA có trải nghiệm mượt mà hơn cho người dùng.
