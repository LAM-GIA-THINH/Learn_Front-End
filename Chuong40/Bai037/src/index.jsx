import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"

function App() {
/**
 * Thử thách:
 * Di chuyển logic Toggle khác để được kết hợp với các 
 * component Menu ở bên trong, sao cho người sử dụng component Menu 
 * của chúng ta không cần phải chạm vào Toggle chung một chút nào.
 */

  return (
    <>
      <Star />

      <br />

      <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>

    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
