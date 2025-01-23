import React from "react"
import Decision from "./Decision"

function App() {
/**
 * Thử thách:
 * Truyền một hàm xuống qua props cho Decision, hàm này nhận 
 * giá trị boolean trong state và ghi lại giá trị đó.
 */
    return (
        <div>
            <Decision sayName={(goingOut) => {
                console.log(goingOut ? "I AM going out" : "I'm staying in")
            }} />
        </div>
    )
}

export default App