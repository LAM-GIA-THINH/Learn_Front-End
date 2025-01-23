import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

const MenuContext = React.createContext()
/**
 * Thử thách:
 * Phần 1:
 * 1. Tạo một context mới trong component Menu. Đảm bảo xuất
 *    context đó từ file này.
 * 2. Bọc thẻ `div` bên dưới bằng Context Provider.
 * 3. Gán cho Provider giá trị là boolean `false` (hiện tại đại diện
 *    cho trạng thái `open` được mã hóa cứng - chúng ta sẽ sửa điều này
 *    rất sớm).
 */
export default function Menu({ children }) {
    // const [open, setOpen] = React.useState(true)

    // function toggle() {
    //     setOpen(prevOpen => !prevOpen)
    // }

    return (
        <MenuContext.Provider value={true}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }