import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"

/**
 * Thử thách:
 * 1. Chuyển đổi MenuButton để chấp nhận children và 
 *    render chúng. (Trong trường hợp này, children sẽ
 *    chỉ là nội dung text của button)
 * 2. Thay đổi MenuButton bên dưới để truyền "Sports"
 *    vào như một child của component thay vì sử dụng
 *    prop `buttonText`.
 * 
 * LƯU Ý: Không sao nếu menu vẫn bị hỏng, tôi 
 * hứa chúng ta sẽ đạt được mục tiêu! 😃
 */

function App() {
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown items={["Tennis", "Pickleball", "Racquetball", "Squash"]} />
    </Menu>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);