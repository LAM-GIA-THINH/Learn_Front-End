1. **React component là gì?**
Một hàm trả về các phần tử React.

2. **Có gì sai với đoạn mã này?**
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
Đoạn mã này không sai về mặt cú pháp, nhưng React yêu cầu tên của các component phải bắt đầu bằng chữ cái hoa (PascalCase). Vậy nên, tên hàm `myComponent` nên được đổi thành `MyComponent`.

3. **Có gì sai với đoạn mã này?**
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
Lỗi ở đây là `Header()` được gọi như một hàm thay vì một component React. Để gọi component đúng cách, bạn cần sử dụng cú pháp JSX để render component, như sau: 

```
root.render(<Header />)
```