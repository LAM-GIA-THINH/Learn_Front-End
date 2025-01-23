import React from "react"

export default function App() {
    /**
     * Thử thách:
     * Tạo state để theo dõi giá trị count của chúng ta (giá trị ban đầu là 0)
     * Đừng quên thay thế "0" cứng trong mã bằng state mới của bạn
     */
    const [count, setCount] = React.useState(0)

    /**
     * Thử thách:
     * Tạo một hàm có tên `add` chạy khi nút + được nhấn. (Có thể chỉ cần console.log("add") cho bây giờ)
     */
    function add() {
        setCount(count + 1)
    }

    /**
     * Thử thách:
     * Xem bạn có thể nghĩ ra cách nào để cộng thêm 1 vào count mỗi khi nút + được nhấn không
     */

    /**
     * Thử thách:
     * Thêm chức năng cho nút trừ
     */
    function subtract() {
        setCount(count - 1)
    }    

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">-</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
