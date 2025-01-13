import { useState } from "react"
import Die from "./Die"
/**
 * Thử thách:
 * 
 * Tạo state để lưu trữ mảng các số của chúng ta. (Khởi tạo
 * state bằng cách gọi hàm `generateAllNewDice` để 
 * tạo ra tất cả các xúc xắc mới ngay khi ứng dụng tải).
 * 
 * Sử dụng hàm `map` trên mảng số trong state để tạo ra 
 * mảng các phần tử Die và render chúng thay thế cho 
 * 10 phần tử Die được viết thủ công trước đó.
 */
export default function App() {
    const [dice, setDice] = useState(generateAllNewDice())
    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    
    const diceElements = dice.map(num => <Die value={num} />)
    
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
        </main>
    )
}