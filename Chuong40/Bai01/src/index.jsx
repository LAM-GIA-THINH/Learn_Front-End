import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button"


/**
 * Thách thức:
 * 
 * Xây dựng một component Button trong một tệp riêng.
 * (Vì mục đích định dạng, hãy đảm bảo rằng nó render một phần tử HTML <button>)
 * Component Button của bạn cần có một prop `text` để hiển thị nội dung.
 */

function App() {
  return (
    <main>
      <Button>Text inside</Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);