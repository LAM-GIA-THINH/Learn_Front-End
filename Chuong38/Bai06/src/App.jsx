import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
/**
 * Thử thách: Cập nhật mảng số trong state thành một 
 * mảng các đối tượng. Mỗi đối tượng nên có dạng như sau:
 * { value: <số ngẫu nhiên>, isHeld: false }
 * 
 * Việc thay đổi này sẽ làm một số phần của code bị lỗi,
 * vì vậy hãy đảm bảo cập nhật lại mọi thứ để ứng dụng 
 * hoạt động bình thường trở lại.
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

    const diceElements = dice.map(dieObj => <Die key={dieObj.id} value={dieObj.value} />)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}