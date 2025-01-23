import React from "react"
/**
 * Thử thách:
 * 
 * 1. Tạo một component Toggle, component này khởi tạo trạng thái boolean của chính nó.
 * 2. Tạo một hàm có tên `toggle` trong component đó, hàm này sẽ đảo ngược giá trị boolean khi chạy.
 * CHÚ Ý: Đừng lo lắng về việc render gì cả nhé.
 */

export default function Toggle({ children }) {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return children
}
