import React from "react"
import { Outlet } from "react-router-dom"

export default function AuthRequired() {
// Kiểm tra trạng thái xác thực của người dùng
// Nếu người dùng KHÔNG được xác thực
    // chuyển hướng người dùng đến trang đăng nhập
// Nếu người dùng ĐÃ được xác thực
    // Hiển thị Outlet

    return <Outlet />
}