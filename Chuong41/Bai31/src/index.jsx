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
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"

import "./server"
/**
 * Thử thách: thêm các route /host/vans và /host/vans/:id, cùng với
 * liên kết "Vans" trong navbar của Host.
 * 
 * Hiện tại, chỉ cần tạo phiên bản stub của các trang (tức là các
 * component chỉ render một <h1>). Đừng lo lắng về việc thêm
 * điều hướng từ /host/vans đến /host/vans/:id ngay bây giờ - liên kết
 * đến /host/vans là đủ cho lúc này.
 * 
 * Khi quyết định có sử dụng nested routes hay không, hãy nhớ xem
 * những gì sẽ/không được chia sẻ giữa hai trang này. Xem file thiết kế
 * (hoặc các ảnh chụp màn hình) để giúp bạn đưa ra lựa chọn.
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
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);