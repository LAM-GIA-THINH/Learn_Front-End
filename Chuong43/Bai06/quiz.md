**Q: Toán tử spread và rest dùng để làm gì?**

**A:**  
1. **Toán tử spread (`...`)**:  
   - **Mở rộng** các phần tử của mảng hoặc đối tượng.  
   - Dùng để sao chép hoặc gộp dữ liệu.  
   - Ví dụ:  
     ```javascript
     let arr1 = [1, 2, 3];
     let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

     let obj1 = { a: 1, b: 2 };
     let obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
     ```

2. **Toán tử rest (`...`)**:  
   - **Gom** các tham số còn lại thành một mảng.  
   - Thường dùng trong hàm hoặc phép gán.  
   - Ví dụ:  
     ```javascript
     function sum(...nums) {
       return nums.reduce((a, b) => a + b, 0);
     }
     console.log(sum(1, 2, 3)); // 6

     let [first, ...rest] = [1, 2, 3, 4];
     console.log(rest); // [2, 3, 4]
     ```