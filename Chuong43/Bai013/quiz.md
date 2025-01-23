**Q: Promises là gì và tại sao bạn lại sử dụng chúng?**

**A:**  
1. **Promises là gì?**  
   - Promise là một đối tượng trong JavaScript đại diện cho một giá trị sẽ có sẵn trong tương lai, có thể là một kết quả hoặc lỗi sau khi hoàn thành một tác vụ bất đồng bộ (asynchronous).
   - Promise có ba trạng thái:  
     - `Pending` (Chờ): Chưa hoàn thành.  
     - `Resolved` (Đã giải quyết): Hoàn thành thành công.  
     - `Rejected` (Đã từ chối): Đã xảy ra lỗi.

2. **Tại sao sử dụng Promises?**  
   - **Quản lý bất đồng bộ:** Giúp quản lý các tác vụ bất đồng bộ, tránh các vấn đề như "callback hell" (lồng nhau quá nhiều hàm callback).  
   - **Hỗ trợ chuỗi các tác vụ:** Bạn có thể dễ dàng chuỗi các promise lại với nhau để xử lý kết quả từ nhiều tác vụ bất đồng bộ một cách tuần tự.  
   - **Cải thiện khả năng đọc mã:** Việc sử dụng `.then()`, `.catch()`, hoặc `async/await` giúp mã nguồn dễ đọc và dễ duy trì hơn.  

   **Ví dụ sử dụng Promise:**
   ```javascript
   let promise = new Promise((resolve, reject) => {
     let success = true;
     if (success) {
       resolve("Success!");
     } else {
       reject("Error!");
     }
   });

   promise.then((message) => {
     console.log(message); // "Success!"
   }).catch((message) => {
     console.log(message); // "Error!"
   });
   ```