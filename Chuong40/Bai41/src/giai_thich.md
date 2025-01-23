1. Ref trong React:
- `useRef` tạo ra một đối tượng ref để lưu trữ tham chiếu đến element DOM
- Trong code: `const inputRef = React.useRef(null)` tạo ref cho input
- `ref={inputRef}` gắn ref vào input element
- `inputRef.current` truy cập trực tiếp đến DOM node của input

2. DOM Manipulation:
- Trong `handleSubmit`, sau khi submit form:
```javascript
inputRef.current.focus()
```
Dòng này thực hiện DOM manipulation - tự động focus vào input sau khi submit

Ref thường được dùng khi cần:
- Truy cập DOM node trực tiếp
- Lưu giá trị không gây re-render
- Trigger imperative animations
- Tích hợp thư viện DOM bên thứ 3

Trong ví dụ này, ref giúp tạo UX tốt hơn bằng cách auto-focus input sau mỗi lần submit, mà không cần phải thao tác DOM truyền thống như `document.querySelector()`.