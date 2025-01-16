import React from 'react';
import ReactDOM from 'react-dom/client';
import { BsStar, BsStarFill } from "react-icons/bs"

import Menu from "./Menu/index"
import Toggle from "./Toggle/index"
// **Các component Headless** không có bất kỳ giao diện người dùng 
// được định dạng nào để hiển thị—chúng chỉ nhằm mục đích cung cấp chức năng.
function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

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
      <hr />
      <br />
      <Menu>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {sports.map(sport => (
            <Menu.Item key={sport}>{sport}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);