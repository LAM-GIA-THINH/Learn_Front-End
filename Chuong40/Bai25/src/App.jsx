import React from "react"
import Header from "./Header"
import Button from "./Button"

/**
 * Thử thách phần 1:
 * Thêm state vào component App. Giá trị mặc định === "light". 
 * Truyền state này làm giá trị cho context provider.
 */

/**
 * Thử thách phần 2:
 * Tạo một hàm `toggleTheme` sử dụng `setTheme` để thay đổi 
 * giá trị từ "light" sang "dark" và ngược lại.
 */

const ThemeContext = React.createContext()

export default function App() {
    const [theme, setTheme] = React.useState("light")

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    /**
     * Thử thách phần 3:
     * Tìm cách truyền CẢ giá trị `theme` và hàm `toggleTheme` 
     * xuống thông qua giá trị của context.
     */
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className={`container ${theme}-theme`}>
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

/**
 * Thử thách phần 4:
 * Giờ đây khi chúng ta đang truyền một object thay vì một chuỗi 
 * qua context, hãy cập nhật các component Button và Header 
 * để nhận được các giá trị chính xác một lần nữa.
 */

export { ThemeContext }
