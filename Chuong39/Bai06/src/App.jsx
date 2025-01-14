import { useState } from "react"
import { languages } from "./languages"

/**
 * Mục tiêu: Xây dựng các phần chính của ứng dụng
 * 
 * Thử thách: 
 * Hiển thị bàn phím ⌨️. Sử dụng <button> cho mỗi chữ cái
 * vì chúng cần có khả năng nhấp chuột và truy cập bằng phím Tab.
 */

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = useState("react")
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

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
    
    const keyboardElements = alphabet.split("").map(letter => (
        <button key={letter}>{letter.toUpperCase()}</button>
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
            <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game">New Game</button>
        </main>
    )
}
