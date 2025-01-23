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
 * Thí nghiệm tư duy:
 * 
 * Viết lại route của "vans" dưới dạng nested route. Vì không có UI chung
 * giữa /vans và /vans/:id, route cha "vans" sẽ không có prop `element`,
 * chỉ có prop `path`.
 * 
 * Gợi ý: bạn không đang tạo một Layout Route (vì điều đó chỉ dành cho UI chung),
 * nhưng bạn đang sử dụng một loại "route không có đường dẫn" khác...
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
          </Route>
          
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