import React from "react"
import useToggle from "../../hooks/useToggle"

/**
 * Thử thách:
 * 6. Truy cập các giá trị context cần thiết trong các component 
 *    MenuButton và MenuDropdown. Xem liệu bạn có thể nhớ (hoặc
 *    tìm lại cách sử dụng các giá trị này) trong mỗi component đó không.
 *    Khi bạn thực hiện thành công, Menu sẽ hoạt động lại (trừ callback
 *    onOpen, mà chúng ta sẽ sửa chữa sau).
 **/

const MenuContext = React.createContext()
export { MenuContext }

export default function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle()

    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}
