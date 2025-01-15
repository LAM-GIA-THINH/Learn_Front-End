import React from "react"
import classnames from "classnames"
/**
 * Thử thách: Xem liệu bạn có thể sửa vấn đề với các prop
 * `className` bị xung đột hay không. Không cần phải quá
 * tinh tế, chỉ cần thử làm sao để nút có thể vừa lớn 
 * VÀ vừa có chữ màu xanh lá.
 * npm install classnames
 */
export default function Button({children, className, size, ...rest}) {
    let sizeClass = size ? `button-${size}` : ""
    const allClasses = classnames(sizeClass, className)
    
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}