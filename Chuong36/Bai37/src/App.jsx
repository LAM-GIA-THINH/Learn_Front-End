import React from "react"
import Count from "./Count"
/**
 * Thách thức:
 * - Tạo một component mới có tên là `Count`
 *    - Component này sẽ nhận một prop gọi là `number`, giá trị
 *      của prop này là giá trị hiện tại của biến đếm (count)
 *    - Để component render phần tử h2.count bên dưới 
 *      và hiển thị giá trị của prop `number` được truyền vào
 * - Thay thế phần tử h2.count bên dưới bằng một instance 
 *   của component mới `Count`, truyền giá trị phù hợp 
 *   vào prop `number`.
 * - Sau khi hoàn thành, mọi thứ sẽ hoạt động giống như trước.
 */
export default function App() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    console.log("App rendered")
    

    return (
        <main className="container">
            <div className="counter">
                <button
                    className="minus"
                    onClick={subtract}
                    aria-label="Decrease count"
                >-</button>

                <Count number={count} />

                <button
                    className="plus"
                    onClick={add}
                    aria-label="Increase count"
                >+</button>
            </div>
        </main>
    )
}
