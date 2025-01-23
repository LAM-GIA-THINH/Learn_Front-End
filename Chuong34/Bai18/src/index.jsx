import { createRoot } from "react-dom/client"
import App from "./App"
// Thử thách: Cài đặt dự án

// Tạo một component App trong tệp App.jsx riêng biệt, là anh chị em với tệp index.jsx này.
// Tạo một thư mục components
// Tạo các component sau trong các tệp riêng biệt trong thư mục components. Trong mỗi component, 
// chỉ cần render một h1 với tên của component (ví dụ: return <h1>Navbar goes here</h1>):
// Navbar
// Main
// Để component App import và render các component Navbar và Main
// Import và render component App trong tệp index.jsx sử dụng ReactDOM
// Lúc này bạn sẽ thấy "Navbar goes here" v.v. hiển thị trong trình duyệt mini.
// Truy cập Google Fonts và lấy font "Inter" với các trọng số 400, 600, và 700. Đặt <links /> 
// đến các font đó NẰM TRÊN liên kết style.css trong index.html. Bạn có thể cần nghiên cứu thêm 
// để hiểu cách thức hoạt động nếu bạn chưa làm điều này trước đó.
const root = createRoot(document.getElementById("root"))
root.render(<App />)