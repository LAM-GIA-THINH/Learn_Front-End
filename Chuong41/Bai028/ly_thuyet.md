- Chức năng chính của NavLink trong React Router là cung cấp phản hồi trực quan cho người dùng về trang hiện tại mà họ đang truy cập.

- NavLink hoạt động tương tự như Link, nhưng nó có thêm khả năng để nhận biết route hiện tại.

- Sự khác biệt chính của NavLink so với Link nằm ở chỗ nó có thể nhận một function làm giá trị cho các prop className và style.

- Function này sẽ được truyền một object có thuộc tính isActive. Thuộc tính isActive là một boolean cho biết route tương ứng có phải là route hiện tại hay không.

- Dựa vào giá trị isActive, chúng ta có thể thay đổi CSS của NavLink một cách linh hoạt, ví dụ:

- Thay đổi className bằng cách trả về một string. Ví dụ, class "my-link" có thể được thêm vào khi route hiện tại đang active.

- Thay đổi inline style bằng cách trả về một object. Ví dụ, màu chữ, font-weight, và text decoration có thể được thay đổi.

- Ví dụ, một NavLink cho route "/about" có thể được định nghĩa như sau:
<NavLink
    to="/about"
    style={({ isActive }) => {
        return isActive ? {fontWeight: 'bold', textDecoration: 'underline', color: 'red'} : null
    }}
>
    About
</NavLink>

Trong ví dụ này, khi người dùng truy cập trang "/about", style inline sẽ được áp dụng.

Việc sử dụng className hay style trong NavLink hoàn toàn tùy thuộc vào người dùng và quy tắc của dự án.

NavLink giúp cải thiện trải nghiệm người dùng bằng cách cung cấp phản hồi rõ ràng về vị trí của họ trong ứng dụng.