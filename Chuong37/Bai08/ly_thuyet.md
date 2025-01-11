Các nhiệm vụ chính của React là:

Làm việc với DOM/trình duyệt để hiển thị giao diện người dùng (UI) lên trang: React chịu trách nhiệm tạo ra các phần tử HTML và cập nhật chúng trên trang web khi dữ liệu thay đổi.
Quản lý trạng thái của các thành phần giữa các vòng lặp render: React giúp lưu trữ và cập nhật dữ liệu của các thành phần, đảm bảo rằng dữ liệu được hiển thị đúng trên giao diện.
Giữ cho UI được cập nhật khi trạng thái hoặc props thay đổi: Khi dữ liệu của một thành phần thay đổi, React sẽ tự động cập nhật lại giao diện để phản ánh những thay đổi đó.

Điều gì mà React không thể tự xử lý?

Các tác động bên ngoài (outside effects):
Lưu trữ cục bộ (localStorage): React không tự động quản lý việc lưu trữ dữ liệu vào localStorage.
Tương tác với API/cơ sở dữ liệu: Việc gửi yêu cầu đến API hoặc tương tác với cơ sở dữ liệu nằm ngoài phạm vi của React.
Đăng ký (subscriptions) (ví dụ: kết nối websocket): React không tự động quản lý các kết nối websocket hoặc các loại đăng ký khác.
Về cơ bản là bất cứ thứ gì mà React không trực tiếp quản lý: React chỉ tập trung vào việc xây dựng và cập nhật giao diện người dùng. Các tác vụ khác như tương tác với server, quản lý trạng thái toàn cục, v.v. cần được xử lý bằng các thư viện hoặc công cụ khác.

`useEffect` là một hook trong React được sử dụng để xử lý các hiệu ứng phụ (side effects) trong một component. Các hiệu ứng phụ có thể là những tác vụ như gọi API, thay đổi DOM, hoặc bất kỳ tác vụ nào không liên quan trực tiếp đến render của component.

### Cấu trúc cơ bản của `useEffect`:

```javascript
useEffect(() => {
  // Mã hiệu ứng phụ (side effect) ở đây
}, [dependencies]);
```

- () => {}: Đây là hàm callback mà `useEffect` sẽ thực thi sau khi render component. Bạn có thể đặt bất kỳ mã nào liên quan đến tác vụ bạn muốn thực hiện (ví dụ: gọi API, đăng ký sự kiện, thay đổi DOM, v.v.).
- [dependencies]: Đây là mảng các giá trị mà `useEffect` sẽ theo dõi. Nếu bất kỳ giá trị nào trong mảng này thay đổi, `useEffect` sẽ được gọi lại. Nếu bạn để mảng rỗng `[]`, hiệu ứng chỉ chạy một lần sau khi component render lần đầu tiên.

### Các trường hợp sử dụng `useEffect`:

1. **Chạy hiệu ứng khi component mount (render lần đầu tiên)**:
   Khi bạn cung cấp một mảng rỗng `[]` làm phụ thuộc, `useEffect` chỉ chạy một lần khi component được mount.

   ```javascript
   useEffect(() => {
       console.log("Component mounted");
   }, []);  // Chạy một lần khi component được render lần đầu tiên
   ```

2. **Chạy hiệu ứng khi một hoặc nhiều giá trị thay đổi**:
   Nếu bạn muốn `useEffect` chạy khi một giá trị cụ thể thay đổi (ví dụ, khi state hoặc props thay đổi), bạn có thể cung cấp mảng phụ thuộc với các giá trị đó.

   ```javascript
   const [count, setCount] = useState(0);

   useEffect(() => {
       console.log("Count changed:", count);
   }, [count]);  // Chạy lại mỗi khi `count` thay đổi
   ```

3. **Chạy hiệu ứng khi component unmount (rời khỏi màn hình)**:
   Bạn có thể làm sạch các tác vụ khi component rời khỏi màn hình (unmount) bằng cách trả về một hàm dọn dẹp từ `useEffect`.

   ```javascript
   useEffect(() => {
       // Cài đặt sự kiện, API, v.v.
       const timer = setTimeout(() => {
           console.log("This is a delayed message");
       }, 1000);

       // Hàm dọn dẹp (cleanup) khi component unmount
       return () => {
           clearTimeout(timer);
       };
   }, []);  // Cleanup khi component unmount
   ```

### Tóm lại:
`useEffect` là một hook quan trọng giúp xử lý các tác vụ bên ngoài quá trình render của React, giúp bạn thực hiện các tác vụ như gọi API, đăng ký sự kiện, thay đổi DOM, hoặc làm sạch khi component unmount, tất cả mà không làm gián đoạn quá trình render của component.