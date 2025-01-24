**JSX là gì**
- Viết tắt của JavaScript XML
- Viết JavaScript với cú pháp mẫu giống HTML (không phải HTML, không phải chuỗi!)
- Tạo ra các thành phần đại diện cho các đối tượng


**Sự khác biệt giữa phần tử và thành phần là gì?**
Trong React, **phần tử (element)** và **thành phần (component)** là hai khái niệm khác nhau với vai trò và cách sử dụng riêng. Dưới đây là sự khác biệt chính:

### **So sánh ngắn gọn:**

| Đặc điểm         | **React Element (Phần tử)**      | **React Component (Thành phần)**   |
|------------------|----------------------------------|-------------------------------------|
| **Định nghĩa**   | Mô tả UI tĩnh (đối tượng JS)     | Hàm hoặc class tạo ra React Element |
| **Tính năng**    | Không có logic hoặc trạng thái   | Có thể chứa logic và trạng thái    |
| **Thay đổi UI**  | Cần tạo phần tử mới              | Có thể tự cập nhật qua state/props |
| **Tái sử dụng**  | Không tái sử dụng được           | Tái sử dụng được                   |

---
### **Phần tử (React Element):**
1. **Định nghĩa:**
   - Là một **đối tượng đơn giản** mô tả giao diện (UI) bạn muốn hiển thị trên màn hình.
   - Phần tử là đơn vị nhỏ nhất của React. Nó **không có logic** hay trạng thái.

2. **Cách tạo:**
   - Phần tử được tạo bằng cách sử dụng JSX hoặc `React.createElement`.
   ```jsx
   const element = <h1>Hello, world!</h1>;
   ```

3. **Vai trò:**
   - Mô tả giao diện (UI) nhưng không có logic xử lý bên trong.


### **Thành phần (React Component):**
1. **Định nghĩa:**
   - Là một **hàm** hoặc **class** trả về React Element, giúp tạo ra các giao diện phức tạp hơn từ các phần tử đơn giản.
   - Thành phần là khối xây dựng lớn hơn, có thể tái sử dụng được và chứa **logic** hoặc **trạng thái**.

2. **Cách tạo:**
   - Thành phần có thể được tạo dưới dạng hàm hoặc class.
   ```jsx
   // Functional Component
   function Welcome(props) {
     return <h1>Hello, {props.name}!</h1>;
   }

   // Class Component
   class Welcome extends React.Component {
     render() {
       return <h1>Hello, {this.props.name}!</h1>;
     }
   }
   ```

3. **Vai trò:**
   - Quản lý giao diện phức tạp hơn, có thể chứa logic, xử lý sự kiện, và sử dụng state để cập nhật giao diện.


**Có thể viết React mà không dùng JSX hay không?**

**Có, bạn hoàn toàn có thể viết React mà không sử dụng JSX.** JSX chỉ là một cú pháp "sugar" (giúp viết mã dễ đọc hơn), và React sẽ chuyển đổi JSX thành các lời gọi hàm `React.createElement` ở mức thấp hơn.


### **Cách viết React không sử dụng JSX**
Thay vì viết JSX, bạn sử dụng trực tiếp hàm `React.createElement`. Điều này đặc biệt hữu ích nếu bạn không muốn hoặc không thể sử dụng bộ biên dịch như Babel.

#### **Ví dụ không dùng JSX:**
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

ReactDOM.render(element, document.getElementById('root'));
```

#### **Tương đương với JSX:**
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1 className="greeting">Hello, world!</h1>;

ReactDOM.render(element, document.getElementById('root'));
```
