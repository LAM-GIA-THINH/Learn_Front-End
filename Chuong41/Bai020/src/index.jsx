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

import "./server"
/**
  Thử thách:
  Thêm một liên kết "Host" vào Navbar để dẫn đến đường dẫn "/host".
  Tạo các component sau trong thư mục pages/Host:
  a. Dashboard ("/host")
  b. Income ("/host/income")
  c. Reviews ("/host/reviews")
  Các component này có thể chỉ có một thẻ <h1> cho đến bây giờ với nội dung ví dụ:
  "Host Dashboard here".
  Cấu hình các route cho mỗi trang này trong các Routes dưới đây. BÂY GIỜ,
  đừng lo lắng về việc lồng các route, bạn có thể chỉ cần đặt chúng ở cùng
  cấp độ với các route "/vans", v.v. dưới đây. 
*/
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);