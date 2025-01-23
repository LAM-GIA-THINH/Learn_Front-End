import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {
    const [dice, setDice] = useState(generateAllNewDice())
    
    // Kiểm tra xem trò chơi đã thắng chưa

    /**
     * Thời gian suy nghĩ quan trọng!
     * 
     * Chúng ta muốn thông báo cho người chơi biết rằng trò chơi đã kết thúc
     * nếu (1) tất cả các viên xúc xắc đều được giữ, và (2) tất cả các viên xúc xắc đều
     * có giá trị giống nhau.
     * 
     * Làm thế nào để thực hiện điều này? Một số câu hỏi cần xem xét:
     * 
     * 1. Chúng ta có cần lưu giá trị `gameWon` trong state không? Nếu có, tại sao?
     *    Nếu không, tại sao lại không?
     * Không.
     * 
     * 2. Chúng ta có cần tạo một hiệu ứng phụ để đồng bộ hóa giá trị `gameWon`
     *    (dù có trong state hay không) với trạng thái hiện tại của các viên xúc xắc không?
     * Không.
     * 
     * Kết luận:
     * Chúng ta có thể suy ra trạng thái trò chơi đã thắng dựa trên điều kiện của trạng thái
     * hiện tại của các viên xúc xắc trong mỗi lần render.
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