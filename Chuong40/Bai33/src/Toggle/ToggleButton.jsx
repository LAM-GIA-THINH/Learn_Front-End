import React from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleButton({ children }) {
    const { toggle } = React.useContext(ToggleContext)
    
    return (
        <div onClick={toggle}>
            {children}
        </div>
    )
}
/**
 * Thử thách:
 * 
 * 1. Tạo một component ToggleButton
 * 2. Nhận hàm `toggle` từ context (2 phần!)
 * 3. Render một div với onClick gọi hàm `toggle`
 *    - cũng render các children
 */
