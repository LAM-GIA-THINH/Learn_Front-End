1. Props giúp chúng ta đạt được điều gì?
Giúp một thành phần có thể tái sử dụng nhiều hơn.

2. Làm thế nào để truyền một prop vào một thành phần?
<MyAwesomeHeader title="???" />

3. Tôi có thể truyền một prop tùy chỉnh (ví dụ: `blahblahblah={true}`) vào một 
   phần tử DOM gốc không? (ví dụ: <div blahblahblah={true}>) Tại sao hoặc tại sao không?
Không, vì JSX mà chúng ta sử dụng để mô tả các phần tử DOM gốc sẽ được React chuyển thành 
các phần tử DOM thực sự. Và các phần tử DOM thực sự chỉ có các thuộc tính/đặc điểm được 
quy định trong đặc tả HTML. (Điều này không bao gồm các thuộc tính như `blahblahblah`).

4. Làm thế nào để nhận props trong một thành phần?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}

5. `props` là kiểu dữ liệu gì khi một thành phần nhận nó?
Một đối tượng!