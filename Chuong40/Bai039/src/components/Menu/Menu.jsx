import React from "react"
import Toggle from "../Toggle/index"

export default function Menu({ children, onOpen }) {
/**
 * Thử thách:
 * 1. Nhận prop `onOpen` cho component Menu
 * 2. Truyền prop onOpen làm giá trị cho prop onToggle của Toggle
 * 3. Trong index.js, truyền prop onOpen cho component Menu 
 *    có giá trị là một hàm. 
 *    Chỉ sử dụng console.log() cho bây giờ.
 */
    return (
        <Toggle onToggle={onOpen}>
            <div className="menu">
                {children}
            </div>
        </Toggle>
    )
}
