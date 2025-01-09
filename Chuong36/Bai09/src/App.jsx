/**
Thử thách:
Tạo một hàm có tên handleClick chạy
setIsImportant("Heck yes")
Thêm một trình nghe sự kiện click vào nút
để chạy handleClick khi nút được nhấn. */
import React from "react"

export default function App() {
    let [isImportant, setIsImportant] = React.useState("Yes")
    
    function handleClick() {
        setIsImportant("Heck yes")
    }
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button onClick={handleClick} className="value">{isImportant}</button>
        </main>
    )
}
