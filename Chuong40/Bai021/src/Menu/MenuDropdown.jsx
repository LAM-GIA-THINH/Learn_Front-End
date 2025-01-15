import React from "react"

export default function MenuDropdown({ children, open, toggle }) {
    
/**
 * Thử thách khám phá:
 * Làm cho các phần tử con của MenuDropdown cũng có 
 * quyền truy cập vào toggle và open.
 */
    
    return open ? (
        <div className="menu-dropdown">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {toggle, open})
            })}
        </div>
    ) : null
}