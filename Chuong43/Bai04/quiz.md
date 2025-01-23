**Q: Sự khác biệt giữa `undefined` và `null` là gì?**

**A:**  
1. **`undefined`:**  
   - Một biến là `undefined` khi nó được khai báo nhưng chưa gán giá trị.  
   - Đại diện cho việc **chưa có giá trị được gán**.  
   - Ví dụ:  
     ```javascript
     let a;
     console.log(a); // undefined
     ```

2. **`null`:**  
   - Đại diện cho việc cố ý gán giá trị **trống**.  
   - Phải được gán một cách rõ ràng.  
   - Ví dụ:  
     ```javascript
     let b = null;
     console.log(b); // null
     ```

**Khác biệt chính:**  
- `undefined` biểu thị rằng một biến chưa được khởi tạo.  
- `null` được gán rõ ràng để thể hiện "không có giá trị."  