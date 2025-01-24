### **1. Sự khác biệt giữa `props` và `state`**
| **Props**                              | **State**                           |
|----------------------------------------|-------------------------------------|
| Dùng để truyền dữ liệu từ cha sang con | Dùng để quản lý dữ liệu nội bộ của thành phần |
| Chỉ đọc (read-only)                    | Có thể thay đổi (mutable)           |
| Được truyền vào từ bên ngoài           | Được quản lý bên trong thành phần   |

---

### **2. Trạng thái trong Class Component vs Functional Component**
- **Class Component:**
  - Sử dụng `this.state` để lưu trạng thái.
  - Thay đổi trạng thái bằng `this.setState()`.
- **Functional Component:**
  - Sử dụng **`useState`** để quản lý trạng thái.

#### **Ví dụ:**
```jsx
// Class Component
class Example extends React.Component {
  state = { count: 0 };
  increment = () => this.setState({ count: this.state.count + 1 });
}

// Functional Component
function Example() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
}
```

---

### **3. Vòng đời của thành phần là gì?**
- Là các giai đoạn mà một thành phần React trải qua:  
  1. **Mounting:** Tạo và thêm thành phần vào DOM (`componentDidMount`).  
  2. **Updating:** Thành phần cập nhật do thay đổi **props** hoặc **state** (`componentDidUpdate`).  
  3. **Unmounting:** Xóa thành phần khỏi DOM (`componentWillUnmount`).

---

### **4. Cập nhật vòng đời trong Functional Component**
- Sử dụng **`useEffect`** để thay thế các phương thức vòng đời trong Class Component.

#### **Ví dụ:**
```jsx
// componentDidMount & componentDidUpdate
useEffect(() => {
  console.log("Mounted or Updated");
}, [dependencies]);

// componentWillUnmount
useEffect(() => {
  return () => console.log("Unmounted");
}, []);
```