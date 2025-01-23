import React from "react"

const ToggleContext = React.createContext()
/**
 * Thử thách: Thiết lập context!
 * Nhắc lại các bước:
 * 1. Tạo một context mới (ngoài component, nhưng trong file này)
 * 2. Xuất instance của context đó ra khỏi file để chúng ta 
 *    có thể sử dụng ở nơi khác
 * 3. Sử dụng Context Provider để bọc `children` được trả về
 *    từ component Toggle này
 * 4. Truyền các giá trị trạng thái vào prop value của context 
 *    để có thể truy cập từ các component con sau này
 */
export default function Toggle({ children }) {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }