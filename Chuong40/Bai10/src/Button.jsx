import React from "react"
import classnames from "classnames"
export default function Button({children, className, size, variant, ...rest}) {
    /**
     * Thử thách:
     * 
     * Chấp nhận prop `variant` và tạo kiểu cho component Button
     * tương ứng. Các giá trị có thể là `success`, `warning`, hoặc `danger`. 
     * Kiểm tra thiết kế trên Figma để biết màu sắc cụ thể cần dùng cho mỗi
     * biến thể.
     */
    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`
    const allClasses = classnames(sizeClass, variantClass, className)
    
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}