import React from "react"
import padsData from "./pads"
/**
 * Thách thức: Sử dụng toán tử ba ngôi (ternary) để xác định màu nền 
 * của các button.
 * Nếu darkMode là true, đặt màu nền là "#222222".
 * Nếu darkMode là false, đặt màu nền là "#cccccc".
 */
export default function App({ darkMode }) {
    const [pads, setPads] = React.useState(padsData)

    const styles = {
        backgroundColor: darkMode ? "#222222" : "#cccccc"
    }

    const buttonElements = pads.map(pad => (
        <button style={styles} key={pad.id}></button>
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
