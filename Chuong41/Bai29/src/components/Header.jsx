import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    /**
     * Thử thách - phần 1:
     * Làm cho navbar chính chỉ ra route đang hoạt động. (Bạn có thể
     * để liên kết trang chủ nguyên vẹn, vì nó đang làm logo cho chúng ta. Chỉ
     * thay đổi các liên kết /host, /about, và /vans)
     * 
     * Sử dụng các quy tắc CSS sau:
     *      font-weight: bold;
     *      text-decoration: underline;
     *      color: #161616;
     * 
     * Bạn có thể sử dụng style nội tuyến hoặc className.
     */
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="/host"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/vans"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}