1. Phương thức `.map()` của mảng làm gì?  
Trả về một mảng mới. Bất kỳ giá trị nào được trả về từ hàm callback 
được cung cấp sẽ được đặt tại cùng một chỉ số trong mảng mới.  
Thông thường, chúng ta lấy các phần tử từ mảng gốc và thay đổi chúng theo một cách nào đó.

2. Chúng ta thường sử dụng `.map()` để làm gì trong React?  
Chuyển đổi một mảng dữ liệu thô thành một mảng các phần tử JSX 
có thể được hiển thị trên trang.

3. Suy nghĩ quan trọng: tại sao sử dụng `.map()` lại tốt hơn 
   việc chỉ tạo các thành phần bằng cách gõ thủ công?  
   1. Chúng ta thường không có sẵn dữ liệu khi xây dựng ứng dụng, 
      vì vậy không thể gõ thủ công chúng.  
   2. Nó làm cho mã của chúng ta "tự duy trì" hơn - không yêu cầu 
      thay đổi mã bổ sung mỗi khi dữ liệu thay đổi.
