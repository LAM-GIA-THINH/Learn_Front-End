import React from "react"
import useToggle from "../../hooks/useToggle"

/**
 * Thử thách:
 * 3. Tạo context (MenuContext). Đảm bảo export
 *    nó để chúng ta có thể truy cập vào các component Menu khác!
 *    (Sẽ là export có tên, không phải export mặc định).
 * 4. Bao bọc div dưới đây bằng context provider.
 * 5. Bạn nghĩ chúng ta nên truyền gì làm giá trị
 *    cho provider? 🤔
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
