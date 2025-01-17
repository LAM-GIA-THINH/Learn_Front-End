import React from "react"
import useEffectOnUpdate from "./useEffectOnUpdate"

/**
 * Thử thách:
 * 1. Truyền một tham số thứ hai có tên `onToggle` vào useToggle.
 *    Đặt một hàm "noop" `() => {}` làm giá trị mặc định.
 * 2. Nghĩ xem: làm thế nào để chúng ta có thể gọi hàm `onToggle`
 *    mỗi khi `on` thay đổi, nhưng KHÔNG gọi nó trong lần render đầu tiên? 🤔
 **/
export default function useToggle(
    initialValue = false,
    onToggle = () => { }
) {
    const [on, setOn] = React.useState(initialValue)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    useEffectOnUpdate(onToggle, [on])

    return [on, toggle]
}