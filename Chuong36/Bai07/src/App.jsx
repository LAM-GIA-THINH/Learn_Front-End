import React from "react"
/**
 * Thử thách: Thay thế chữ "Yes" được mã hóa cứng trên trang 
 * bằng một state được khởi tạo với React.useState()
 */
export default function App() {
    const result = React.useState("Yes")
    console.log(result)
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{result[0]}</button>
        </main>
    )
}
