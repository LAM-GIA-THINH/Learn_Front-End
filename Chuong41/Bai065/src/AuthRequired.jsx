import React from "react"
import { Outlet } from "react-router-dom"

export default function AuthRequired() {
    // Kiểm tra trạng thái xác thực của người dùng
    const authenticated = true
// Nếu người dùng KHÔNG được xác thực
    // chuyển hướng người dùng đến trang đăng nhập
// Mini thử thách: viết logic này 👇
// Nếu người dùng ĐÃ được xác thực        
    if (authenticated) {
        return <Outlet />
    }
}