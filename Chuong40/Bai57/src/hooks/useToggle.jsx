import React from "react"
/**
 * Thử thách:
 * 1. Truyền một tham số có tên `initialValue` vào custom hook của chúng ta.
 *    Đặt giá trị mặc định là `false` trong trường hợp tham số này không
 *    được cung cấp khi gọi useToggle().
 * 2. Khởi tạo state với tham số `initialValue`.
 **/
export default function useToggle(initialValue = false) {
    const [on, setOn] = React.useState(initialValue)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    return [on, toggle]
}