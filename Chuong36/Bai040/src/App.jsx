import React from "react"
import padsData from "./pads"
/**
 * Thách thức phần 1:
 * 1. Khởi tạo state với giá trị mặc định là mảng 
 *    được import từ file pads.js.
 * 2. Sử dụng hàm map để duyệt qua mảng state và hiển thị 
 *    từng phần tử dưới dạng một <button> 
 *    (CSS đã được viết sẵn cho bạn).
 *    (Chưa cần quan tâm đến việc sử dụng các thuộc tính "on" 
 *    hoặc "color" vào lúc này).
 */
export default function App() {
    const [pads, setPads] = React.useState(padsData)
    
    const buttonElements = pads.map(pad => (
        <button key={pad.id}></button>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
