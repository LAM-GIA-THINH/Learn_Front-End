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
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"

import "./server"

function App() {
  
/**
 * Thử thách: Thêm các route cần thiết để chúng ta có thể truy cập
 * /host/vans/:id/pricing và /host/vans/:id/photos.
 * 
 * Thêm các component stub vào các tệp riêng biệt cho
 * các route này (ví dụ: <h2>Pricing view here</h2>). Mình đã tạo sẵn
 * các tệp `HostVanInfo.jsx`, `HostVanPricing.jsx` và
 * `HostVanPhotos.jsx` cho bạn, nhưng chúng đều trống.
 * 
 * Đừng quên: bạn sẽ cần sử dụng một công cụ đặc biệt từ
 * React Router để chúng ta có thể giữ lại thông tin trên cùng (và
 * cuối cùng là navbar chúng ta tạo) trên trang trong khi di chuyển
 * từ route lồng nhau này sang route lồng nhau khác. Điều này sẽ yêu cầu
 * một số thay đổi nhẹ trong `HostVanDetail.jsx`.
 * 
 * Vì chúng ta chưa có navbar, bạn có thể thử nghiệm bằng cách
 * điều hướng thủ công đến ví dụ: /host/vans/1/pricing.
 */

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
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);