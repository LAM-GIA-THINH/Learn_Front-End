import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

const MenuContext = React.createContext()
/**
 * Thử thách:
 * Sử dụng những gì bạn đã biết, hoàn thành component Menu để 
 * mọi thứ hoạt động trở lại thông qua Context + State.
 */

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(false)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <MenuContext.Provider value={{open, toggle}}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }