import React from "react"
/**
 * Mini-câu hỏi:
 * Hai tham số trong React.useEffect là gì?
 * 1. Hàm callback
 * 2. Mảng dependencies
 * 
 * Mini-thử thách:
 * Cập nhật hàm hook tùy chỉnh của chúng ta để chấp nhận
 * các tham số giống như những gì chúng ta đã nói ở trên.
 */

/**
 * Mini-thử thách:
 * Cập nhật mã để sử dụng các tham số của hook
 * thay vì các giá trị từ component Toggle.
 */
export default function useEffectOnUpdate(effectFunction, deps) {
    const firstRender = React.useRef(true)
    
    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            effectFunction()
        }
    }, deps)
}