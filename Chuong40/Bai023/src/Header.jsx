import React from "react"
import { ThemeContext } from "./App"
/**
 * Thử thách:
 * Phần 1: Cập nhật className CSS để sử dụng giá trị từ context
 * thay vì được mã hóa cứng (hard-coded) là "dark". Ngoài ra, 
 * thay đổi chữ "Dark" trong thẻ h1 để khớp với `value` từ context.
 */
export default function Header() {
    const value = React.useContext(ThemeContext)
    
    return (
        <header className={`${value}-theme`}>
            <h1>{value === "light" ? "Light" : "Dark"} Theme</h1>
        </header>
    )
}