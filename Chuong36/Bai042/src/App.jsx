import React from "react"
import padsData from "./pads"
import Pad from "./Pad"
/**
 * Thách thức phần 2:
 * 1. Tạo một component riêng có tên là "Pad" và
 *    thay thế `button` ở trên bằng component <Pad />.
 * 2. Truyền cho component Pad một prop gọi là `color` với giá trị 
 *    tương ứng từ đối tượng `padsData`.
 * 3. Trong component Pad, áp dụng một style inline cho <button> 
 *    để thiết lập màu nền cho button.
 * 
 * (Chúng ta sẽ xử lý thuộc tính "on" sau).
 */
export default function App() {
    const [pads, setPads] = React.useState(padsData)

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} />
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
