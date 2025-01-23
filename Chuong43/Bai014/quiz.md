**Q: Pass by reference là gì và nó khác gì với pass by value?**

**A:**  
1. **Pass by Value:**  
   - Khi một biến được truyền vào một hàm theo kiểu pass by value, giá trị của biến đó được sao chép và truyền vào hàm. Điều này có nghĩa là bất kỳ thay đổi nào đối với giá trị trong hàm sẽ không ảnh hưởng đến giá trị ban đầu của biến ngoài hàm.
   - **Ví dụ:**  
     ```javascript
     let a = 10;
     function changeValue(b) {
       b = 20;
     }
     changeValue(a);
     console.log(a); // 10
     ```

2. **Pass by Reference:**  
   - Khi một biến được truyền vào một hàm theo kiểu pass by reference, thay vì sao chép giá trị của biến, tham chiếu đến đối tượng (hoặc mảng) được truyền. Điều này có nghĩa là các thay đổi đối với đối tượng bên trong hàm sẽ ảnh hưởng đến đối tượng gốc bên ngoài hàm.
   - **Ví dụ:**  
     ```javascript
     let obj = { name: "John" };
     function changeObject(o) {
       o.name = "Jane";
     }
     changeObject(obj);
     console.log(obj.name); // "Jane"
     ```  

**Khác biệt chính:**  
- **Pass by Value**: Truyền giá trị sao chép của biến (dành cho kiểu dữ liệu nguyên thủy như số, chuỗi).  
- **Pass by Reference**: Truyền tham chiếu đến đối tượng (dành cho kiểu dữ liệu đối tượng như mảng, đối tượng).