import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
/**
 * Thử thách:
 * Khởi động dự án VanLife bằng cách tạo 2 route đầu tiên:
 * Home và About.
 * 
 * Đồng thời, bao gồm thanh điều hướng (navbar) có thể liên kết giữa
 * hai route này. 
 * Hiện tại, bạn có thể sao chép/dán mã code navbar vào cả hai trang Home
 * và About, hoặc tìm một nơi để đặt nó sao cho có thể dùng chung giữa hai trang.
 * (Đừng suy nghĩ quá phức tạp về phần này - cứ làm cách nào dễ nhất
 * vì chúng ta sẽ học cách tiếp cận tốt hơn rất sớm.)
 * 
 * Ôn tập thử thách: tự làm toàn bộ CSS dựa trên thiết kế được liên kết trong slide.
 */
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);