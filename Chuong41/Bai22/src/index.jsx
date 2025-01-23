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
   * Thách thức: Tạo component HostLayout!
   * HostLayout nên sử dụng các Links để điều hướng đến các
   * route sau:
   *    * Dashboard ("/host")
   *    * Income ("/host/income")
   *    * Reviews ("/host/reviews")
   * Sau đó, thay thế element của route cha "/host" bên dưới
   * bằng component HostLayout mới mà bạn đã tạo.
   * 
   * LƯU Ý: Route/trang Dashboard sẽ tạm thời biến mất, nhưng đừng lo.
   * Chúng ta sẽ sửa điều đó ở bài học tiếp theo.
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
          
          <Route path="/host" element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);