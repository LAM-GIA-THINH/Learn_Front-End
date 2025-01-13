import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
/**
 * Thử thách: Cập nhật hàm `hold` để thay đổi giá trị
 * của thuộc tính `isHeld` trên đối tượng trong mảng
 * mà người dùng đã click, dựa trên prop `id` được truyền
 * vào hàm.
 * 
 * Gợi ý: như thường lệ, có nhiều cách để thực hiện điều này.
 */
export default function App() {
    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
    }

    function rollDice() {
        setDice(generateAllNewDice())
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        ))
    }

    const diceElements = dice.map(dieObj => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    ))

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}