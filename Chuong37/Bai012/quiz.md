1. **React components được coi là "hàm thuần túy" như thế nào?**  
   - Với cùng một **props** hoặc **state**, component sẽ luôn trả về nội dung hoặc giao diện (UI) giống nhau.  
   - Việc render và re-render một component sẽ không gây ra bất kỳ hiệu ứng phụ nào lên một hệ thống bên ngoài.

---

2. **"Hiệu ứng phụ" (side effect) trong React là gì? Một số ví dụ?**  
   - Bất kỳ đoạn mã nào ảnh hưởng hoặc tương tác với một hệ thống bên ngoài.  
   - Ví dụ: local storage, gọi API, WebSockets, hoặc thao tác với DOM.

---

3. **Điều gì KHÔNG phải là "hiệu ứng phụ" trong React? Ví dụ?**  
   - Bất kỳ điều gì do React tự quản lý.  
   - Ví dụ: Quản lý state, giữ UI đồng bộ với dữ liệu, hoặc render các phần tử DOM.

---

4. **Khi nào React chạy hàm `useEffect`? Khi nào React KHÔNG chạy hàm này?**  
   - Chạy ngay khi component được render lần đầu tiên.  
   - Chạy lại trên mỗi lần re-render của component (nếu không có dependency array).  
   - **Không chạy** nếu các giá trị trong dependency array không thay đổi giữa các lần render.

---

5. **Giải thích "dependency array" là gì?**  
   - Là tham số thứ hai của hàm `useEffect`.  
   - Là cách để React biết liệu có nên chạy lại hàm `useEffect` hay không, dựa trên sự thay đổi của các giá trị trong mảng này.