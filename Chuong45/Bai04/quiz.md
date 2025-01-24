**Làm thế nào để truyền giá trị từ phần tử cha sang phần tử con? Còn từ phần tử con sang phần tử cha thì sao?**
### **1. Từ Cha sang Con**
- Dùng **props** để truyền dữ liệu.  
```jsx
function Parent() {
  return <Child message="Hello from Parent!" />;
}

function Child(props) {
  return <h1>{props.message}</h1>;
}
```

---

### **2. Từ Con sang Cha**
- Cha truyền một **callback function** qua props, con gọi hàm này để gửi dữ liệu.  
```jsx
function Parent() {
  const handleData = (data) => console.log(data);
  return <Child sendDataToParent={handleData} />;
}

function Child(props) {
  return <button onClick={() => props.sendDataToParent("Hello from Child!")}>
    Gửi dữ liệu
  </button>;
}
```

---

### **Tóm lại:**
- **Cha → Con:** Dùng **props**.  
- **Con → Cha:** Dùng **callback function** từ cha.

**Prop drilling là gì và có chỉnh được không?**
### **1. Props Drilling**
- Là việc truyền props qua nhiều cấp trung gian, dù các thành phần ở giữa không dùng đến.  
- **Vấn đề:** Khó bảo trì mã.  
- **Giải pháp:** Dùng **Context API** hoặc Redux.  

function App() {
  const user = { name: "Alice" };
  return <Parent user={user} />;
}

function Parent(props) {
  return <Child user={props.user} />;
}

function Child(props) {
  return <h1>Welcome, {props.user.name}!</h1>;
}


### **2. Có sửa props được không?**
- **Không.** Props là **read-only**.  
- Muốn thay đổi, quản lý dữ liệu ở **state của cha** và truyền lại qua props.  

#### **Ví dụ đúng:**
```jsx
function Parent() {
  const [name, setName] = React.useState("Alice");
  return <Child name={name} updateName={() => setName("Bob")} />;
}

function Child(props) {
  return <button onClick={props.updateName}>{props.name}</button>;
}
```
