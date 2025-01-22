import React from "react"
import GrandParent from "./GrandParent"

export default function App() {
    const [count, setCount] = React.useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    console.log("[GP] [P] [C] [GC] APP just rendered")
    return (
        <div>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <h2>Count: {count}</h2>
            <p>App component</p>
            <GrandParent count={count} />
            <GrandParent />
        </div>
    )
}
/**
 * Thử nghiệm: chuyện gì xảy ra khi bạn truyền `count` vào chỉ một trong
 * các component `GrandParent`? Những gì sẽ được re-render?
 * Có quan trọng không nếu component `GrandParent` thậm chí không
 * sử dụng prop được truyền vào đó?
 */