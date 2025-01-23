import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]
  
/**
 * 1. MenuDropdown nên render children thay vì items
 * 2. MenuItem (component mới bạn cần tạo) cũng nên
 *    render children. Lấy <div className="menu-item">
 *    từ MenuDropdown trước khi xóa nó nếu bạn muốn
 *    làm theo cách đơn giản :)
 * 3. Map qua mảng `sports` bên trong MenuDropdown trong
 *    file này và render một MenuItem cho mỗi môn thể thao trong mảng
 */
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown items={sports} />
    </Menu>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);