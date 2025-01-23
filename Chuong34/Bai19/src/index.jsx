import { createRoot } from "react-dom/client"
import App from "./App"
// Thử thách: hoàn thiện Navbar để phù hợp với thiết kế
// Gợi ý:
// Vì mục đích HTML ngữ nghĩa, Navbar nên render một phần tử <header> với một <nav> lồng vào bên trong. 
// Các phần tử hình ảnh và văn bản "ReactFacts" có thể được render như các phần tử con bên trong <nav>.
// Tham khảo thiết kế để có thông tin chính xác nhất về màu sắc, kích thước, thông tin phông chữ, v.v.
const root = createRoot(document.getElementById("root"))
root.render(<App />)