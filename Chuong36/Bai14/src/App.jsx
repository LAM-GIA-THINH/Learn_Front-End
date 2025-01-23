import React from "react"
/*
Thử thách:
Khởi tạo state cho isGoingOut dưới dạng boolean
Làm cho khi nhấn nút, giá trị boolean đó sẽ thay đổi (true -> false, false -> true)
Hiển thị "Yes" nếu isGoingOut là true, "No" nếu không phải */
export default function App() {
    
    const [isGoingOut, setIsGoingOut] = React.useState(false)
    
    function changeMind() {
        setIsGoingOut(prev => !prev)
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button 
                onClick={changeMind} 
                className="value"
                aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
            >{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
