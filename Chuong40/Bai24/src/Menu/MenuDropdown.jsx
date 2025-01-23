import React from "react"
import { MenuContext } from "./Menu"

/**
 * Thử thách phần 2:
 * Lấy giá trị từ context và cập nhật code kết xuất có điều kiện
 * bên dưới để sử dụng giá trị đó thay vì `open`, giá trị trước đây
 * được truyền xuống thông qua props.
 */

export default function MenuDropdown({ children }) {
    const open = React.useContext(MenuContext)
    
    return open ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}