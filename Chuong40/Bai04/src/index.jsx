import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button"
import { FaMoneyBill } from "react-icons/fa"
/**
 * Thử thách: Thêm biểu tượng "FaMoneyBill" vào bên trái
 * của văn bản "Mua ngay!" trong nút.
 * npm install react-icons
 */

function App() {
  return (
    <main>
      <Button>
        <FaMoneyBill />
        Buy now!
      </Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);