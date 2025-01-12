**1. Dependency array là `[count]`:**
```javascript
React.useEffect(() => {
    console.log("Effect ran")
    fetch("https://swapi.py4e.com/api//people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))
}, [count])
```

- **Cách hoạt động:**
  - `useEffect` sẽ chạy mỗi khi **`count`** thay đổi.
  - Mỗi lần nhấn nút "Add", `count` tăng, dẫn đến việc gọi lại `useEffect` và thực hiện fetch lại dữ liệu.

- **Output:**
  - Mỗi lần bạn nhấn nút, console sẽ in:
    - `"Effect ran"`: Mỗi lần `count` thay đổi.
    - Fetch API sẽ được gọi lại và cập nhật lại dữ liệu trong `starWarsData`.

---

**2. Dependency array là `[]`:**
```javascript
React.useEffect(() => {
    console.log("Effect ran")
    fetch("https://swapi.py4e.com/api//people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))
}, [])
```

- **Cách hoạt động:**
  - `useEffect` chỉ chạy **một lần duy nhất** khi component được render lần đầu tiên.
  - Vì dependency array là `[]`, `useEffect` không phụ thuộc vào bất kỳ state hoặc props nào, nên nó không chạy lại khi `count` thay đổi.

- **Output:**
  - Chỉ khi component được render lần đầu:
    - `"Effect ran"` được in ra console một lần duy nhất.
    - Fetch API được gọi một lần để cập nhật dữ liệu.

---

**So sánh ngắn gọn:**
- `[count]`: `useEffect` chạy mỗi lần `count` thay đổi -> Fetch API được gọi nhiều lần.
- `[]`: `useEffect` chỉ chạy một lần khi component được render lần đầu -> Fetch API chỉ được gọi một lần.