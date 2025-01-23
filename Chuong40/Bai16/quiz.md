# Bài kiểm tra về Compound Components

1. Bạn sẽ giải thích khái niệm compound components trong React như thế nào cho người chỉ biết những kiến thức cơ bản về React?
   Đó là những components làm việc cùng nhau để hoàn thành một mục tiêu lớn hơn mà việc thực hiện bằng một component đơn lẻ có thể không hợp lý.

2. Đâu là một số ví dụ về các phần tử HTML làm việc cùng nhau để bổ sung chức năng hoặc kiểu dáng cho nhau?
   `<ul>` & `<li>`, `<select>` & `<option>`, `<table>` & tất cả các phần tử table khác

3. Compound components có thể giúp bạn tránh việc phải truyền props qua nhiều cấp như thế nào?
   Compound components "làm phẳng" cấu trúc phân cấp mà nếu không tôi sẽ cần phải truyền props qua. Vì tôi cần cung cấp các children để render, component cha nhất có thể truy cập trực tiếp đến các component "cháu" đó, để có thể truyền bất kỳ props nào nó cần truyền một cách trực tiếp.