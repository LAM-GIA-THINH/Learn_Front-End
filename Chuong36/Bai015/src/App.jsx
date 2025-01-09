import React from "react"
    /**
    Thử thách: Chuyển đổi mã dưới đây để sử dụng một mảng
    được lưu trong state thay vì một biến cục bộ. Khởi tạo
    mảng state là một mảng rỗng.
    Đừng lo lắng về việc sửa addFavoriteThing ngay lúc này. 
    const myFavoriteThings = []
    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
    "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)
    */ 
export default function App() {
    const [myFavoriteThings, setMyFavoriteThings] = React.useState([])

    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

    function addFavoriteThing() {
        /**
        Thử thách: Bạn làm đi!
        Mỗi khi nhấn "Add item", nó sẽ thêm một chuỗi
        "Test" vào danh sách trên trang. */
        setMyFavoriteThings(
            prevFavThings => [
                ...prevFavThings,
                allFavoriteThings[prevFavThings.length]
            ]
        )
    }

    return (
        <main>
            <button onClick={addFavoriteThing}>Add item</button>
            <section aria-live="polite">
                {thingsElements}
            </section>
        </main>
    )
}