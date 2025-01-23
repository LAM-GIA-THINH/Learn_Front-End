**Q: Destructuring đối tượng và mảng là gì, và tại sao nên sử dụng?**

**A:**  

1. **Destructuring là gì?**  
   - Là cách trích xuất các giá trị từ mảng hoặc thuộc tính từ đối tượng, rồi gán chúng vào biến một cách ngắn gọn.  

2. **Ví dụ:**  
   - **Đối với mảng:**  
     ```javascript
     const arr = [1, 2, 3];
     const [a, b, c] = arr; // a = 1, b = 2, c = 3
     ```

   - **Đối với đối tượng:**  
     ```javascript
     const obj = { name: "John", age: 30 };
     const { name, age } = obj; // name = "John", age = 30
     ```

3. **Tại sao sử dụng?**  
   - Giúp mã nguồn ngắn gọn, dễ đọc hơn.  
   - Truy cập trực tiếp các giá trị cần thiết mà không cần lặp lại cấu trúc.  
   - Hữu ích khi làm việc với các API trả về dữ liệu phức tạp.  
   - Có thể gán giá trị mặc định nếu thuộc tính không tồn tại.  

   **Ví dụ gán mặc định:**  
   ```javascript
   const { city = "Unknown" } = { name: "John" };
   console.log(city); // "Unknown"
   ```