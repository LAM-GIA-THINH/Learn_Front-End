import React from "react"

const ToggleContext = React.createContext()
/**
 * Thử thách:
 * 1. Nhận prop `onToggle` cho component Toggle
 * 2. Sử dụng useEffect, chạy hàm được truyền vào prop onToggle mỗi khi 
 *    trạng thái `on` thay đổi.
 * 3. Trong Star.js, truyền prop onToggle cho component Toggle có giá trị là một hàm. 
 *    Hàm này chỉ cần chạy một console.log cho bây giờ.
 * Chú ý: Còn một số việc chúng ta cần làm ở đây, bạn có thể nhận thấy một lỗi nhỏ mà 
 * chúng ta sẽ phải xử lý sau.
 */
export default function Toggle({ children, onToggle }) {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    React.useEffect(() => {
        onToggle()
    }, [on])

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }