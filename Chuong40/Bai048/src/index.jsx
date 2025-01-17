import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Toggle from "./components/Toggle/index"

/**
 * Thử thách: 
 * Phần 1: 
 * Tạo một component ToggleDisplay và gắn nó
 * vào Toggle như Toggle.Display.
 * 
 * Nó cần lấy giá trị `on` từ context Toggle
 * và render các children bằng cách gọi các children như một hàm,
 * truyền giá trị `on` vào (ví dụ: children(on)).
 */

/**
 * Thử thách: 
 * Phần 2:
 * Thay vì render Toggle.On và Toggle.Off, hãy sử dụng một
 * Toggle.Display duy nhất để render phần tử div bên dưới.
 * Toggle.Display sẽ nhận một hàm làm child (đừng quên đặt
 * hàm đó trong dấu ngoặc nhọn vì đó là JavaScript trong JSX) 
 * và sẽ nhận trạng thái `on` làm tham số.
 * 
 * Từ hàm đó, bạn cần trả về div bên dưới, nhưng lần này
 * hãy render điều kiện className `filled` dựa trên giá trị của `on`.
 * 
 * Bạn sẽ biết mình đã làm đúng nếu khi nhấp vào hộp,
 * sẽ có chuyển đổi giữa nền trắng và nền xanh.
 * Xem style.css để biết chi tiết về những gì đang diễn ra.
 */


function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.Display>
            {(on) => {
              return <div className={`box ${on ? "filled" : ""}`}></div>
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle>
    </>
  )
}
          // <Toggle.On>
          //   <div className="box filled"></div>
          // </Toggle.On>
          // <Toggle.Off>
          //   <div className="box"></div>
          // </Toggle.Off>
      // <Star />
      
      // <br />

      // <Menu>
      //   <Menu.Button>Menu</Menu.Button>
      //   <Menu.Dropdown>
      //     <Menu.Item>Home</Menu.Item>
      //     <Menu.Item>About</Menu.Item>
      //     <Menu.Item>Contact</Menu.Item>
      //     <Menu.Item>Blog</Menu.Item>
      //   </Menu.Dropdown>
      // </Menu>

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
