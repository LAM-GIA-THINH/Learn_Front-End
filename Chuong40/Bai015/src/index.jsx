import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"

/**
 * Thử thách:
 * 1. Chuyển đổi component Menu để sử dụng props.children
 *    thay vì nhận một prop `items`. (Chúng ta sẽ cập nhật
 *    các component MenuButton và MenuDropdown sau.)
 *    Xem ghi chú trong file Menu.js để biết thêm thông tin
 *   
 * 2. Import MenuButton và MenuDropdown vào file NÀY
 *    và render chúng như các children của component Menu.
 *    Nhớ truyền buttonText và mảng items vào các
 *    component cần những props này để hoạt động.
 *    (Chúng ta cũng sẽ cập nhật điều này sớm!)
 *   
 * LƯU Ý: Chức năng của menu sẽ bị hỏng sau
 * những thay đổi này, nhưng không sao! Do đó, đừng lo
 * về việc di chuyển state hoặc hàm toggle từ Menu;
 * chúng ta cần học thêm nhiều điều trước khi có thể làm điều đó.
 */

function App() {
  return (
    <Menu>
      <MenuButton buttonText="Sports"/>
      <MenuDropdown items={["Tennis", "Pickleball", "Racquetball", "Squash"]}/>
    </Menu>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);