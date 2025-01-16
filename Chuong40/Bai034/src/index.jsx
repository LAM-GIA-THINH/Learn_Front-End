import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star"
import Toggle from "./Toggle/index"
/**
 * Thử thách:
 * 
 * 1. Tạo một component mới, ToggleOn, nhận children
 *    qua props
 * 2. Nhận trạng thái `on` từ context
 * 3. Render `children` có điều kiện nếu `on` là true. Nếu `on`
 *    là false, render `null` thay vì `children`
 */
function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Star />
        </Toggle.Button>
        <Toggle.On>The toggle is on</Toggle.On>
        <Toggle.Off>The toggle is off</Toggle.Off>
      </Toggle>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
