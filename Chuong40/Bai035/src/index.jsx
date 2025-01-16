import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star"
import Toggle from "./Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"
/**
 * Thử thách: Refactor ứng dụng của chúng ta để sử dụng các component Toggle.On 
 * và Toggle.Off để render có điều kiện các biểu tượng sao từ react-icons. 
 * (Xem mã trong Star.js để biết chi tiết).
 * 
 * Nhắc nhở:
 * 1. Đảm bảo sao chép các classNames từ Star.js nhé! 
 *    Mình đã thêm một số CSS mà chúng ta không muốn mất đi.
 * 2. Nhấp vào biểu tượng Star sẽ làm đảo ngược trạng thái Toggle. Hãy thử
 *    tìm cách làm điều đó 🤔. Gợi ý: chúng ta đã xây dựng một thứ 
 *    giúp đảo ngược trạng thái Toggle qua lại 😉
 */
function App() {
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
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
