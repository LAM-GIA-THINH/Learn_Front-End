**Q: Thiết kế đáp ứng là gì và làm thế nào để triển khai nó?**

**A:**  
1. **Thiết kế đáp ứng (Responsive Design)** là phương pháp thiết kế web sao cho trang web có thể hiển thị và hoạt động tốt trên nhiều loại thiết bị, từ máy tính để bàn đến điện thoại di động, bằng cách điều chỉnh giao diện người dùng (UI) phù hợp với kích thước màn hình và độ phân giải khác nhau.

2. **Cách triển khai thiết kế đáp ứng:**  
   - **Sử dụng các đơn vị linh hoạt (Flexible Units):**  
     Thay vì sử dụng các đơn vị cố định như `px`, bạn có thể sử dụng các đơn vị linh hoạt như `em`, `%`, `vw`, `vh` để các phần tử thay đổi kích thước phù hợp với màn hình.
   
   - **Media Queries:**  
     Dùng `@media` trong CSS để áp dụng các kiểu dáng khác nhau tùy thuộc vào kích thước màn hình của thiết bị. Ví dụ:
     ```css
     @media (max-width: 768px) {
       body {
         background-color: lightblue;
       }
     }
     ```
   
   - **Fluid Layouts:**  
     Sử dụng bố cục dạng lưới hoặc các phần tử có kích thước linh hoạt thay vì cố định để nội dung có thể tự động thay đổi tùy thuộc vào kích thước màn hình.

   - **Hình ảnh đáp ứng:**  
     Sử dụng thuộc tính `srcset` hoặc các kỹ thuật CSS như `background-size: cover` để hình ảnh thay đổi kích thước hoặc sử dụng ảnh chất lượng thấp hơn trên thiết bị có độ phân giải thấp.