import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
/**
 * Thử thách:
 * Log "Game won!" ra console chỉ khi hai điều kiện chiến thắng được thỏa mãn.
 * 
 * 1. Tất cả các viên xúc xắc đều được giữ, và
 * 2. Tất cả các viên xúc xắc đều có giá trị giống nhau
 * 
 * Hiện tại, không cần phải lưu biến nào cả!
 */
/**
 * Thử thách phần 2:
 * 1. Tạo một biến `gameWon` mới.
 * 2. Nếu `gameWon` là true, thay đổi văn bản của nút thành
 *    "New Game" thay vì "Roll"
 */

export default function App() {
    const [dice, setDice] = useState(generateAllNewDice())

    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

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
            <button className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    )
}