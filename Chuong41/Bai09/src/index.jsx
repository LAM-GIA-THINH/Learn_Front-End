import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"

import "./server"

/**
 * Thử thách: Tạo trang danh sách Vans, Route, và Link
 * 
 * 1. Tạo một component Vans trong thư mục "pages". Hiện tại,
 *    chỉ cần render <h1>Trang Vans sẽ hiển thị ở đây 🚐</h1>
 * 2. Tạo một Route cho trang Vans tại đường dẫn /vans
 * 3. Thêm một Link trong thanh điều hướng (nav bar) để liên kết đến route Vans
 */

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);