import { useState } from "react"
import Die from "./Die"

export default function App() {
    /**
     * Thử thách: Tạo một nút "Roll Dice" (Lăn xúc xắc) để tung lại
     * tất cả 10 xúc xắc.
     * 
     * Khi nhấn vào nút, cần tạo một mảng số mới và cập nhật
     * state `dice` thành mảng mới đó (do đó sẽ render lại
     * mảng lên trang).
     */    
    const [dice, setDice] = useState(generateAllNewDice())
    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    
    function rollDice() {
        setDice(generateAllNewDice())
    }
    
    const diceElements = dice.map(num => <Die value={num} />)
    
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            
            <button className="roll-dice" onClick={rollDice}>Roll</button>
            
        </main>
    )
}