import React from "react"
/**
 * Thử thách:
 * - Tạo trạng thái `isShown` (kiểu boolean, mặc định là `false`)
 * - Thêm một nút bấm để chuyển đổi giá trị qua lại
 */
export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    
    /**
     * Thử thách:
     * Chỉ hiển thị đoạn văn punchline nếu `isShown` là true
     */
    
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>Show punchline</button>
            <hr />
        </div>
    )
}