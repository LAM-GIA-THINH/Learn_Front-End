import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
/**
 * Thử thách 1: tìm ra những gì cần truyền vào 
 * các phần tử con (children) để chúng có thể 
 * truy cập vào các props mới!
 */
/**
 * Thử thách 2:
 * Giờ đây MenuButton và MenuDropdown đang nhận được
 * các props `open` và `toggle`, hãy chấp nhận các props
 * cần thiết trong những component này và refactor chúng 
 * để sử dụng các props đó, làm cho menu hoạt động lại!
 * 
 * Gợi ý: trong MenuDropdown, bạn sẽ cần sử dụng kết xuất
 * có điều kiện (conditional rendering) để hiển thị div 
 * hoặc hiển thị `null`.
 */
export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div className="menu">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    open,
                    toggle
                })
            })}
        </div>
    )
}
