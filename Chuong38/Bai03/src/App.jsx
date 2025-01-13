import Die from "./Die"

export default function App() {
    /**
     * Thử thách:
     * 
     * Viết một hàm (allNewDice) trả về một mảng gồm
     * 10 số ngẫu nhiên trong khoảng từ 1-6 (bao gồm cả 1 và 6).
     * 
     * Tạm thời log mảng các số ra console.
     */    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    
    return (
        <main>
            <div className="dice-container">
                <Die value={1} />
                <Die value={2} />
                <Die value={3} />
                <Die value={4} />
                <Die value={5} />
                <Die value={6} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
        </main>
    )
}