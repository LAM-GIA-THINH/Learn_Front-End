import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from "./components/Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"
import Menu from "./components/Menu/index"

function App() {
/**
 * Thử thách: Refactor các component Menu để sử dụng logic 
 * từ Toggle thay vì tự xử lý logic của chúng.
 * 
 * 1. Loại bỏ tất cả logic context và state khỏi các component menu
 * 2. Sử dụng Toggle và các "sub-components" của nó, thêm một menu vào 
 *    component App dưới biểu tượng Star. Đảm bảo sử dụng một wrapper 
 *    <Toggle> riêng biệt để trạng thái không bị liên kết với trạng thái 
 *    Toggle của Star
 */

  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star" />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>

      <br />

      <Toggle>
        <Menu>
          <Toggle.Button>
            <Menu.Button>Menu</Menu.Button>
          </Toggle.Button>
          <Toggle.On>
            <Menu.Dropdown>
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
              <Menu.Item>Blog</Menu.Item>
            </Menu.Dropdown>
          </Toggle.On>
        </Menu>
      </Toggle>

    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
