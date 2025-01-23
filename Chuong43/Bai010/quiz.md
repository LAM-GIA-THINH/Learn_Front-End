**Q: Một số bộ chọn CSS là gì và chúng khác nhau như thế nào?**

**A:**  
1. **Bộ chọn đơn giản:**  
   - **Chọn theo thẻ (Element Selector):**  
     Chọn tất cả các phần tử của một thẻ HTML.  
     Ví dụ:  
     ```css
     p {
       color: red;
     }
     ```

   - **Chọn theo lớp (Class Selector):**  
     Chọn tất cả các phần tử có lớp cụ thể.  
     Ví dụ:  
     ```css
     .my-class {
       color: blue;
     }
     ```

   - **Chọn theo ID (ID Selector):**  
     Chọn phần tử có ID cụ thể.  
     Ví dụ:  
     ```css
     #my-id {
       color: green;
     }
     ```

2. **Bộ chọn nhóm:**  
   - **Chọn nhóm thẻ (Group Selector):**  
     Chọn nhiều phần tử khác nhau.  
     Ví dụ:  
     ```css
     h1, h2, h3 {
       font-family: Arial;
     }
     ```

3. **Bộ chọn theo thuộc tính (Attribute Selector):**  
   Chọn phần tử dựa trên thuộc tính và giá trị của nó.  
   Ví dụ:  
   ```css
   input[type="text"] {
     border: 1px solid black;
   }
   ```

4. **Bộ chọn con (Descendant Selector):**  
   Chọn phần tử bên trong phần tử khác.  
   Ví dụ:  
   ```css
   div p {
     color: orange;
   }
   ```

5. **Bộ chọn con trực tiếp (Child Selector):**  
   Chọn phần tử con trực tiếp của phần tử khác.  
   Ví dụ:  
   ```css
   div > p {
     font-size: 14px;
   }
   ```

6. **Bộ chọn giả (Pseudo-classes và Pseudo-elements):**  
   - **Pseudo-classes:** Chọn phần tử ở trạng thái cụ thể (ví dụ: khi người dùng hover vào).  
     Ví dụ:  
     ```css
     a:hover {
       color: red;
     }
     ```
   - **Pseudo-elements:** Chọn phần tử ảo như trước hoặc sau nội dung phần tử.  
     Ví dụ:  
     ```css
     p::first-letter {
       font-size: 2em;
     }
     ```