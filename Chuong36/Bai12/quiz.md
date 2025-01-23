1. Bạn có 2 lựa chọn về những gì bạn có thể truyền vào hàm setter của state (ví dụ: `setCount`). Đó là gì?
   1. Truyền phiên bản mới của state mà chúng ta muốn sử dụng làm thay thế cho phiên bản cũ của state.
   2. Truyền một hàm callback. Hàm này phải trả về giá trị mới mà chúng ta muốn state có. Hàm sẽ nhận phiên bản cũ của state làm tham số để chúng ta có thể sử dụng nó giúp xác định giá trị mới của state.

2. Khi nào bạn muốn truyền lựa chọn đầu tiên (từ câu trả lời trên) vào hàm setter của state?

   Khi chúng ta không thực sự quan tâm đến (hoặc không cần) giá trị cũ, chỉ đơn giản muốn thiết lập một giá trị mới.

3. Khi nào bạn muốn truyền lựa chọn thứ hai (từ câu trả lời trên) vào hàm setter của state?

   Khi chúng ta quan tâm đến giá trị trước đó trong state và cần nó để giúp xác định giá trị mới sẽ là gì.