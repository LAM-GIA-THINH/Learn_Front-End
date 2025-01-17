import React from "react"
import useToggle from "../../hooks/useToggle"

/**
 * Thử thách:
 * 1. Xóa tất cả các tham chiếu đến Toggle trong cả 4 component Menu
 * 2. Import và sử dụng `useToggle()` để tạo trạng thái mới
 *    và các hàm toggle để chúng ta có thể sử dụng chúng trong Menu.
 *    Đặt tên cho các biến là "open" và "toggleOpen".
 **/

export default function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle()
    
    return (
        <div className="menu">
            {children}
        </div>
    )
}
