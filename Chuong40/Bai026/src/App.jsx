import React from "react"
import Header from "./Header"
import Button from "./Button"

const ThemeContext = React.createContext()
/**
 * Thử thách cuối cùng:
 * 1. Cập nhật div bên dưới với className sử dụng giá trị 
 *    `theme` từ state.
 * 2. Thêm lại trình xử lý sự kiện onClick trong component Button
 *    để sử dụng hàm `toggleTheme` mà chúng ta đang truyền xuống qua context.
 */

export default function App() {
    const [theme, setTheme] = React.useState("light")

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className={`container ${theme}-theme`}>
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }