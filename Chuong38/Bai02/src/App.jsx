/**
 * Thử thách:
 * 
 * - Tạo một component Die nhận một prop `value`. 
 *   Component này nên render một nút (button) hiển thị giá trị đó.
 * - Render 10 instance của component Die (thủ công)
 *      - Tạm thời cung cấp một số từ 1-6 làm giá trị cho mỗi instance
 * - Style các component <main> và <Die> 
 *   sao cho giống với giao diện được mô tả trong slide
 *      - Gợi ý: Tạo một container để chứa 10 instance
 *        của component Die và sử dụng CSS Grid để sắp xếp
 *        chúng đều nhau trong 2 hàng và 5 cột
 *      - Sử dụng flexbox trên phần tử <main> để căn giữa 
 *        container của các xúc xắc trên trang
 */

import Die from "./Die"

export default function App() {
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