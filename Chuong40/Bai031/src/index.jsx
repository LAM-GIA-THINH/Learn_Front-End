import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star"
import Toggle from "./Toggle"
/**
 * Thử thách: Sửa những phần bị hỏng! Bạn sẽ biết là nó hoạt động khi ngôi sao xuất hiện trở lại.
 */
function App() {
  return (
    <>
      <Toggle>
        <Star />
      </Toggle>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
