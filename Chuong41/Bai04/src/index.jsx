import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
/**
 * Thử thách:
 * 1. Tạo một component "About" (chỉ cần render một thẻ h1 khác có nội dung
 *    "Trang About" hoặc điều gì đó thú vị hơn mà bạn tự chọn).
 * 2. Tạo một Route mới để render component About khi đường dẫn là /about.
 */
function App() {
  return (
    <h1>Hello, React Router!</h1>
  )
}

function About() {
  return (
    <h1>About page goes here! 🎉</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);