import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"

import "./server"

/**
 * Thử thách: Thêm footer vào trang web! Tạo một component Footer riêng biệt
 * trong thư mục components, và chỉ cần sử dụng đoạn mã sau:
 * 
 * <footer>&#169; 2022 #VANLIFE</footer>
 * 
 * Mình chủ yếu muốn kiểm tra khả năng của bạn trong việc tìm ra vị trí
 * để thêm footer, và không quá quan tâm đến việc định dạng chính xác.
 * Nhưng nếu bạn cảm thấy cần thêm bài tập CSS, hãy thoải mái thực hiện
 * cả việc định dạng!
 * 
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);