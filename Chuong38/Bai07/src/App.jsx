import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {
    /**
     * Thử thách: Thêm kiểu dáng điều kiện cho component Die
     * sao cho nếu nó được "held" (isHeld === true), màu nền
     * của nó sẽ chuyển thành màu xanh lá nhạt (#59E391).
     * 
     * Nhớ rằng: hiện tại component Die không có cách nào 
     * để biết nó có đang "held" hay không.
     */
    
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

    const diceElements = dice.map(dieObj => (
        <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld}/>)
    )

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}