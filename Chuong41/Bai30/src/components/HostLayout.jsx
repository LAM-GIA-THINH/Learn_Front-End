import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
/**
 * Thử thách - phần 2:
 * Làm cho navbar của host chỉ ra route đang hoạt động.
 * 
 * Sử dụng các quy tắc CSS sau:
 *      font-weight: bold;
 *      text-decoration: underline;
 *      color: #161616;
 * 
 * Mình khuyến nghị sử dụng style nội tuyến lần này.
 * 
 * LƯU Ý: Sẽ có một lỗi nhỏ mà chúng ta sẽ sửa 
 * sau khi bạn hoàn thành thử thách.
 */

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink
                    to="/host"
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/host/income"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Income
                </NavLink>

                <NavLink
                    to="/host/reviews"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Reviews
                </NavLink>

            </nav>
            <Outlet />
        </>
    )
}