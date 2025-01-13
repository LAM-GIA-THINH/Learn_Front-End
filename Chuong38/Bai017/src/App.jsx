import { useState, useRef, useEffect } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
/**
 * Thử thách:
 * Làm sao để khi trò chơi kết thúc, nút "New Game" 
 * tự động nhận được focus từ bàn phím để người dùng bàn phím
 * có thể dễ dàng kích hoạt nút đó mà không cần phải tab qua
 * tất cả các viên xúc xắc trước.
 * 
 * Gợi ý:
 * 1. Việc focus vào một phần tử DOM bằng phương thức DOMNode.focus()
 *    yêu cầu truy cập vào node DOM gốc. Công cụ nào chúng ta đã học
 *    giúp làm điều này?
 *    useRef
 * 2. Việc tự động gọi `.focus()` trên một phần tử DOM khi
 *    trò chơi đã thắng yêu cầu chúng ta đồng bộ hóa biến `gameWon`
 *    với hệ thống bên ngoài (DOM). Công cụ nào chúng ta đã học
 *    giúp làm điều này?
 *    useEffect
 */
export default function App() {
    const [dice, setDice] = useState(() => generateAllNewDice())
    const buttonRef = useRef(null)

    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)
        
    useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus()
        }
    }, [gameWon])

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
        if (!gameWon) {
            setDice(oldDice => oldDice.map(die =>
                die.isHeld ?
                    die :
                    { ...die, value: Math.ceil(Math.random() * 6) }
            ))
        } else {
            setDice(generateAllNewDice())
        }
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
            {gameWon && <Confetti />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    )
}