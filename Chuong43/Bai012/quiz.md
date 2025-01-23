**Q: Một số vấn đề với số trong JavaScript mà bạn cần phải bảo vệ là gì?**

**A:**  
1. **Lỗi làm tròn (Rounding Issues):**  
   - JavaScript sử dụng số học với kiểu `floating-point`, dẫn đến một số lỗi làm tròn khi thực hiện các phép toán. Ví dụ:
     ```javascript
     0.1 + 0.2 === 0.3 // false
     ```
   - Để khắc phục, bạn có thể làm tròn số sau khi tính toán hoặc sử dụng các thư viện như `BigDecimal`.

2. **Giới hạn độ chính xác (Precision Issues):**  
   - Các số lớn hoặc số nhỏ có thể bị mất độ chính xác do giới hạn của kiểu dữ liệu `Number` trong JavaScript.
   - Ví dụ: `Number.MAX_SAFE_INTEGER` là giá trị số nguyên lớn nhất mà JavaScript có thể xử lý chính xác. Bất kỳ số nào vượt qua giá trị này có thể gặp phải lỗi sai số.

3. **So sánh số với kiểu `NaN`:**  
   - `NaN` (Not-a-Number) là giá trị đặc biệt trong JavaScript, và việc so sánh `NaN` với bất kỳ giá trị nào, kể cả chính nó, sẽ luôn trả về `false`.
   - Để kiểm tra `NaN`, sử dụng `Number.isNaN()` thay vì `==` hoặc `===`.

4. **Số âm không chính xác (Negative Zero):**  
   - JavaScript có giá trị `-0`, điều này có thể dẫn đến một số sự khác biệt trong việc so sánh và xử lý số.  
   - Ví dụ: `-0 === 0` là `true`, nhưng đôi khi có thể cần xử lý sự khác biệt này.

5. **Sử dụng kiểu dữ liệu `BigInt` cho số lớn:**  
   - Khi làm việc với các số nguyên rất lớn, bạn nên sử dụng `BigInt` thay vì `Number` để tránh mất độ chính xác. Ví dụ:
     ```javascript
     const largeNumber = 123456789012345678901234567890n; 
     ```