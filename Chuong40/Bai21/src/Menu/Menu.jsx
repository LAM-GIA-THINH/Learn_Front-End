import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
/**
 * Thử thách khám phá:
 * Trong các component MenuButton, MenuDropdown, và MenuItem, 
 * hãy chấp nhận các props `toggle` và `open`, sau đó chỉ cần 
 * console log cả hai props này trong cả 3 component.
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
