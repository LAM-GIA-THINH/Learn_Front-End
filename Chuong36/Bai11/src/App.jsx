import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)
    /**
    Lưu ý: nếu bạn cần giá trị cũ của state
    để giúp bạn xác định giá trị mới của state,
    bạn nên truyền một hàm callback vào hàm setter của state thay vì sử dụng
    state trực tiếp. Hàm callback này sẽ
    nhận giá trị cũ của state làm tham số,
    sau đó bạn có thể sử dụng nó để xác định giá trị mới
    của state. */
    // Thử thách: cập nhật `add`,`subtract` để sử dụng một hàm callback
    function add() {
        setCount(prevCount=> prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
