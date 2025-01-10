import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)
    /**
     * Thách thức:
     * Gọi setPads để cập nhật trạng thái của pad đã được nhấn.
     * Sử dụng map để duyệt qua mảng pads trước đó, và nếu phần tử 
     * hiện tại bạn đang duyệt có id giống với `id` được truyền vào hàm này,
     * thì trả về một đối tượng mới với giá trị `on` được thay đổi thành 
     * giá trị đối ngược với trước đó.
     * Nếu không (nếu các id không trùng nhau), chỉ cần trả về phần tử trước 
     * đó mà không thay đổi gì.
     */    
    function toggle(id) {
        setPads(prevPads => prevPads.map(item => {
            return item.id === id ? {...item, on: !item.on} : item
        }))
    }
    
    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
