**Câu hỏi:**

1. Fragment là gì?
2. Portal là gì?
3. Khi nào nên sử dụng thành phần dựa trên lớp so với thành phần hàm?
4. Đâu là một thành phần bậc cao hơn?
5. Đâu là các thành phần không được kiểm soát và được kiểm soát?

**Đáp án:**

1. **Fragment** trong React là một thành phần đặc biệt cho phép bạn nhóm nhiều phần tử mà không thêm một node DOM phụ nào. Nó giúp bạn tránh việc phải tạo thêm thẻ wrapper không cần thiết trong DOM, giữ cho cấu trúc HTML gọn gàng và dễ quản lý.

2. **Portal** là một tính năng trong React cho phép bạn render một component con vào một DOM node khác ngoài node DOM của component cha. Nó hữu ích khi bạn cần render các thành phần UI ra ngoài cấu trúc DOM thông thường, như trong trường hợp của modals, tooltips hoặc dropdowns.

3. **Khi nào nên sử dụng thành phần dựa trên lớp (class component) so với thành phần hàm (functional component)?**
   - Thành phần dựa trên lớp thường được sử dụng khi bạn cần sử dụng các tính năng như lifecycle methods (ví dụ: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) hoặc muốn sử dụng `state` mà không cần hooks.
   - Thành phần hàm hiện nay được ưu tiên sử dụng nhờ vào hooks (như `useState`, `useEffect`, ...) và thường được ưa chuộng hơn vì chúng dễ viết, dễ đọc và có khả năng tái sử dụng cao hơn.

4. **Thành phần bậc cao (HOC)** là một mẫu thiết kế trong React, trong đó một hàm nhận vào một thành phần và trả về một thành phần mới. Thành phần bậc cao thường được sử dụng để tái sử dụng logic giữa các component, ví dụ như để xử lý các tính năng như xác thực, phân quyền, hoặc chia sẻ các state chung.

5. **Thành phần không được kiểm soát** (uncontrolled components) là những thành phần mà React không quản lý trạng thái của chúng. Thay vào đó, các giá trị input của chúng được quản lý bởi DOM, thường thông qua `ref`.
   **Thành phần được kiểm soát** (controlled components) là những thành phần mà React quản lý trạng thái của chúng thông qua props và state. Bạn thường xuyên sử dụng `onChange` để cập nhật trạng thái của một input hoặc textarea.