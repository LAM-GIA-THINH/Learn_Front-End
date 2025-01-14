import React from "react"
import { languages } from "./languages"

/**
 * Mục tiêu: Xây dựng các phần chính của ứng dụng
 * 
 * Thử thách: Tạo các thẻ ngôn ngữ. Sử dụng tệp
 * `languages.js` để lấy mảng ngôn ngữ, bao gồm
 * tên ngôn ngữ, màu nền và màu chữ.
 * 
 * Gợi ý cho bố cục: sử dụng một container flex có khả năng
 * wrap để bố trí các ngôn ngữ.
 */

export default function AssemblyEndgame() {

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
        </main>
    )
}
