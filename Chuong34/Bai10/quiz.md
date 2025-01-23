1. **React đặt tất cả các phần tử tôi tạo trong JSX ở đâu khi tôi gọi `root.render()`?**

Tất cả các phần tử tôi render sẽ được đặt vào trong thẻ div có id là "root" (hoặc bất kỳ phần tử nào khác mà tôi có thể chọn khi gọi `createRoot`).

2. **Điều gì sẽ hiển thị trong console nếu tôi chạy dòng mã sau:**
```
console.log(<h1>Hello world!</h1>)
```
Một đối tượng (object)! Không giống như việc tạo phần tử HTML trong DOM thuần, những gì được tạo ra từ JSX trong code React của tôi là một đối tượng JavaScript đơn giản mà React sẽ sử dụng để điền vào giao diện.

3. **Có gì sai với đoạn mã này:**
```
root.render(
    <section>
        <h1>Hi there</h1>
        <p>This is my website!</p>
    </section>
)
```
Bạn chỉ có thể render một phần tử cha duy nhất tại một thời điểm. Phần tử cha đó có thể có bao nhiêu phần tử con tùy ý.

4. **"Declarative" có nghĩa là gì so với "imperative"?**
*Imperative* có nghĩa là chúng ta cần cung cấp các hướng dẫn cụ thể theo từng bước để hoàn thành một nhiệm vụ.
*Declarative* có nghĩa là chúng ta có thể viết mã để chỉ "mô tả" *cái gì* sẽ xuất hiện trên trang và để cho công cụ (React, ví dụ) xử lý chi tiết *như thế nào* để đưa những thứ đó lên trang.

5. **"Composable" có nghĩa là gì?**
Chúng ta có những mảnh nhỏ có thể kết hợp với nhau để tạo thành một cái gì đó lớn hơn hoặc tốt hơn so với các mảnh riêng lẻ.