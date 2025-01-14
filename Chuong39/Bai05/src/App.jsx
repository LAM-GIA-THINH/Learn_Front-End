import { useState } from "react"
import { languages } from "./languages"

/**
 * Mục tiêu: Xây dựng các phần chính của ứng dụng
 * 
 * Thử thách: 
 * 1. Lưu một "currentWord" trong state. Khởi tạo với giá trị "react".
 * 2. Duyệt qua các chữ cái của từ (bạn sẽ cần chuyển
 *    chuỗi thành một mảng các chữ cái trước) và hiển thị
 *    từng chữ cái dưới dạng <span>. Viết hoa các chữ cái khi
 *    hiển thị chúng.
 * 3. Thiết kế giao diện giống với bản thiết kế. Bạn có thể tạo 
 *    hiệu ứng gạch dưới trên hộp bằng cách sử dụng `border-bottom`.
 */

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = useState("react")

    const languageElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
            <span
                className="chip"
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })
    
    const letterElements = currentWord.split("").map((letter, index) => (
        <span key={index}>{letter.toUpperCase()}</span>
    ))

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>
            <section className="word">
                {letterElements}
            </section>
        </main>
    )
}
