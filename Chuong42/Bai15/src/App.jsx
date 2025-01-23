import React from "react"
import GrandParent from "./GrandParent"

export default function App() {
    const [count, setCount] = React.useState(0)
    const [darkMode, setDarkMode] = React.useState(false)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
/**
 * Thách thức: Tìm cách để ngăn Grandparent không bị render lại
 * khi giá trị của `count` thay đổi!
 * 
 * Nói cách khác, hãy tìm cách để dạy React giữ tham chiếu của
 * đối tượng `style` ở trên và chỉ coi nó khác đi nếu giá trị của 
 * `darkMode` thay đổi.
 */

    const style = React.useMemo(() => {
        return {
            backgroundColor: darkMode ? "#2b283a" : "#e9e3ff",
            color: darkMode ? "#e9e3ff" : "#2b283a",
        }
    }, [darkMode])

    React.useEffect(() => {
        console.log("style changed")
    }, [style])

    console.log("[GP] [P] [C] [GC] APP just rendered")
    return (
        <div className="container">
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <h2>Count: {count}</h2>
            <button onClick={() => setDarkMode(prev => !prev)}>
                {darkMode ? "Switch to Light" : "Switch to Dark"}
            </button>
            <p>App component</p>
            <GrandParent style={style} />
            <GrandParent />
        </div>
    )
}
