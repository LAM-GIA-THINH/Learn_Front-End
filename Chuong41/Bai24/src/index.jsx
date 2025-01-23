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
// 1. <Route element={<Layout />}> <Route path="/" element={<Home />} />
// Trong cấu trúc này, <Layout /> là một component chứa các route con bên trong. Khi truy cập vào /, 
// trang sẽ hiển thị Home sau khi Layout đã được render.
// Home sẽ được hiển thị tại route /, và Layout sẽ luôn hiển thị cùng với Home.
// Đây là một cách tiếp cận truyền thống khi bạn muốn sử dụng một layout chung cho nhiều trang và 
// có thể cần định nghĩa rõ ràng đường dẫn cho từng route con.
// 2. <Route path="/" element={<Layout />}> <Route index element={<Home />} />
// Trong cấu trúc này, index được sử dụng thay cho path="/". Điều này có nghĩa là khi truy cập vào route gốc (/), 
// React Router sẽ render component Home ngay bên trong Layout.
// Cách này giúp rút gọn và rõ ràng hơn khi bạn chỉ có một route con cho route gốc. index thay thế cho việc chỉ định 
// path là /, và nó chỉ được sử dụng cho route gốc (root route) của component cha.
// Layout sẽ là một wrapper và Home sẽ là một phần của nó khi người dùng truy cập vào route gốc.
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