import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"

import "./server"

/**
  Thử thách: Cấu hình mã để có thể sử dụng layout route!
  Tạo một thư mục có tên "components".
  Tạo 2 tệp component mới: Layout.jsx và Header.jsx.
  Di chuyển mã <header> dưới đây vào tệp component Header.
  (KHÔNG nhập (import) component Header vào đây!)
*/
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);