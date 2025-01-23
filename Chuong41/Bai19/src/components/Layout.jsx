import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"

/**
Thử thách: Làm cho Header hoạt động lại 
*/
export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}