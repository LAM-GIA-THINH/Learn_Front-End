import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button"
import { FcGoogle } from "react-icons/fc"

/**
 * Thử thách: Thêm một trình xử lý onClick vào
 * instance của component Button (nút trên trang này).
 * Sau đó, thực hiện bất kỳ thay đổi cần thiết nào để nó hoạt động.
 * 
 * Khi nhấn vào nút, cần ghi "Logging in..." 
 * vào console.
 */

function App() {
  return (
    <main>
      <Button onClick={() => console.log("Logging in...")}>
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);