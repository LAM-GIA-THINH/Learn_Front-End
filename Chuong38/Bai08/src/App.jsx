import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {
    const [dice, setDice] = useState(generateAllNewDice())
    /**
     * Thử thách: Tạo một hàm `hold` nhận `id` làm tham số.
     * Tạm thời, chỉ cần hàm này console.log(id).
     * 
     * Sau đó, tìm cách truyền hàm đó xuống mỗi instance
     * của component Die sao cho khi mỗi instance được click,
     * nó sẽ log ID duy nhất của chính nó. (Gợi ý: có nhiều
     * cách để làm điều này, vì vậy bạn có thể chọn cách nào
     * bạn muốn).
     */
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
        console.log(id)
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