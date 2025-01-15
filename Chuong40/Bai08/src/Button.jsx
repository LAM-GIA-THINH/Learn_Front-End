import React from "react"

export default function Button({children, size, ...rest}) {
    /**
     * Thử thách: chấp nhận prop `size` và đặt `className` của
     * <button> thành:
     * 
     * "button-small" nếu `size` là "sm"
     * "button-large" nếu `size` là "lg"
     * 
     * Lưu ý: chưa cần thử thêm `className` vào instance Button
     * trong index.js. (Tuy nhiên, hãy thêm `className` vào file này
     * như một phần của thử thách.)
     */
    let sizeClass
    if (size === "sm") sizeClass = "button-small"
    if (size === "lg") sizeClass = "button-large"
    
    return (
        <button {...rest} className={sizeClass}>
            {children}
        </button>
    )
}