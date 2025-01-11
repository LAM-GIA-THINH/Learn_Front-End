### Tóm tắt Lập trình Hàm trong React (Kèm ví dụ)

1. **Chức năng thuần túy (Pure Functions):**  
   - Hàm thuần túy luôn cho cùng kết quả khi nhận cùng đầu vào.  
   - Trong React, component chỉ trả về UI dựa trên props, không thay đổi dữ liệu bên ngoài.

   **Ví dụ:**  
   ```jsx
   function Greeting(props) {
     return <h1>Hello, {props.name}!</h1>; // Không thay đổi dữ liệu bên ngoài
   }

   // Đầu vào giống nhau => Kết quả luôn giống nhau
   <Greeting name="Alice" />; // Kết quả: "Hello, Alice!"
   <Greeting name="Bob" />;   // Kết quả: "Hello, Bob!"
   ```

2. **Tính bất biến (Immutability):**  
   - Props và state là bất biến, không thay đổi trực tiếp.  
   - Dùng **setter function** để tạo một bản sao mới thay vì chỉnh sửa trực tiếp.

   **Ví dụ:**  
   ```jsx
   const [counter, setCounter] = React.useState(0);

   const increment = () => {
     // Không chỉnh sửa trực tiếp: counter++
     setCounter(counter + 1); // Tạo giá trị mới
   };

   return <button onClick={increment}>Count: {counter}</button>;
   ```

3. **Tránh tác dụng phụ (Side Effects):**  
   - Component không nên thay đổi hệ thống bên ngoài khi render.  
   - Dùng **`useEffect`** để thực hiện tác dụng phụ, như gọi API hoặc thay đổi tiêu đề trang.

   **Ví dụ:**  
   ```jsx
   React.useEffect(() => {
     document.title = "Welcome to my app!"; // Tác dụng phụ: thay đổi tiêu đề trang
   }, []); // Chạy một lần khi component được render
   ```

4. **UI là hàm của State:**  
   - UI được tạo dựa trên **state** và **props**.  
   - Khi state thay đổi, React tự động cập nhật UI.

   **Ví dụ:**  
   ```jsx
   const [isLoggedIn, setIsLoggedIn] = React.useState(false);

   const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

   return (
     <div>
       <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>
       <button onClick={toggleLogin}>
         {isLoggedIn ? "Log Out" : "Log In"}
       </button>
     </div>
   );
   ```

---

**Tóm lại:**  
React khuyến khích sử dụng lập trình hàm để tạo component dễ dự đoán, dễ bảo trì và hiệu quả