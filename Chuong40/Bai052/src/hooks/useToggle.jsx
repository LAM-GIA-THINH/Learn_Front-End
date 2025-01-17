import React from "react"
/**
 * Tạo phần khởi đầu cho custom hook useToggle!
 * 
 * 1. Tạo một hàm có tên là useToggle(). Bỏ qua các tham số
 *    cho bây giờ. (Chúng ta sẽ quay lại phần này sau)
 * 2. Mang hook `useState` và hàm `toggle` từ
 *    component Toggle vào hook này.
 * 3. Thêm import thiếu (React).
 * 4. TRẢ VỀ từ hàm này một mảng với `on` là
 *    chỉ số đầu tiên và `toggle` là chỉ số thứ hai.
 * 5. Thêm import thiếu trong file Toggle.js
 **/
export default function useToggle() {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    return [on, toggle]
}