import React from "react"
import { Navigate, Outlet } from "react-router-dom"
/**
 * Thử thách: triển khai lại logic AuthRequired.
 * Khi nhấp vào "Protected Route", người dùng sẽ tự động được 
 * chuyển hướng đến route /login (dù route này chưa tồn tại, 
 * không cần lo lắng về phần đó lúc này).
 */
export default function AuthRequired() {
    const authenticated = false
    
    if (!authenticated) {
        return <Navigate to="/login" />
    }
    return <Outlet />
}