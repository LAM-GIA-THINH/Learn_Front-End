import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
/**
 * Thử thách: Cập nhật hàm `rollDice` để không chỉ lăn 
 * tất cả các xúc xắc mới, mà còn phải kiểm tra các xúc xắc
 * hiện tại để KHÔNG lăn những cái đang được "held".
 * 
 * Gợi ý: điều này sẽ khá tương tự với hàm `holdDice`
 * bên dưới. Khi chúng ta "lăn" một xúc xắc, thực tế là
 * chúng ta chỉ đang cập nhật thuộc tính `value` của đối tượng xúc xắc.
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
        setDice(oldDice => oldDice.map(die => 
            die.isHeld ?
                die :
                { ...die, value: Math.ceil(Math.random() * 6) }
        ))
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
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}