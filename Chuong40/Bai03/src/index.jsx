import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button"

/**
 * Thử thách: Làm cho nút (Button) chấp nhận và hiển thị nội dung con (children).
 * 
 * Thay đổi văn bản để hiển thị "Mua ngay!" để nó bớt nhàm chán 🥱
 */

function App() {
  return (
    <main>
      <Button>Buy now!</Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);