"Prop drilling xảy ra khi một thành phần ở sâu trong cây thành phần cần truy cập dữ liệu trong một thành phần ông bà (hoặc cao hơn), 
và dữ liệu đó được truyền tay nhau thủ công xuống từng thành phần con cho đến khi cuối cùng nó đến được thành phần cần nó."

Các giải pháp cho Prop Drilling
Prop drilling là một vấn đề thường gặp trong React khi chúng ta cần truyền dữ liệu từ một thành phần cha xuống các 
thành phần con ở nhiều cấp độ. 
Việc truyền dữ liệu qua nhiều lớp thành phần như vậy có thể khiến code trở nên phức tạp và khó bảo trì.

Dưới đây là một số giải pháp phổ biến để giải quyết vấn đề này:

1. Không làm gì cả (Do nothing!)
Tránh vội vàng trừu tượng hóa (Avoid Hasty Abstractions): Đôi khi, việc tạo ra các lớp trừu tượng quá sớm có thể dẫn đến prop drilling. 
Hãy cân nhắc kỹ trước khi tạo ra các thành phần hoặc context mới. Đôi khi, cách đơn giản nhất lại là cách tốt nhất.
2. Compound components !!!!
Làm phẳng cấu trúc (Flatten the structure): Thay vì truyền dữ liệu qua nhiều lớp thành phần, hãy tạo một thành phần ghép bao gồm tất cả
các thành phần con cần dữ liệu đó. Điều này giúp làm phẳng cấu trúc và đơn giản hóa việc truyền dữ liệu.
Dễ dàng truyền props cho các thành phần con sâu hơn: Với thành phần ghép, bạn có thể dễ dàng truyền props trực tiếp cho các 
thành phần con ở bất kỳ cấp độ nào mà không cần truyền qua nhiều lớp thành phần trung gian.
3. Context
Truy cập trạng thái trực tiếp từ các thành phần cần nó: Context cung cấp một cách để chia sẻ dữ liệu giữa các thành phần mà 
không cần truyền qua props. Bạn có thể tạo một context để lưu trữ dữ liệu cần chia sẻ và các thành phần con có thể sử dụng context
để truy cập dữ liệu đó.