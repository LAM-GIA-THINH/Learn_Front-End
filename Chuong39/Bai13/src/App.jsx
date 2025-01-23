import { useState } from "react"
import { clsx } from "clsx"
import { languages } from "./languages"

/**
 * Mục tiêu: Thêm cơ chế đoán sai vào trò chơi
 * 
 * Thử thách:
 * Điều kiện hiển thị trạng thái "won" hoặc "lost"
 * từ thiết kế, bao gồm cả văn bản và kiểu dáng, dựa trên
 * các biến mới được tính toán.
 * 
 * Lưu ý: Chúng ta luôn muốn hiển thị `section` bao quanh,
 * vì vậy chỉ thay đổi nội dung bên trong phần đó. Nếu không,
 * nội dung trên trang sẽ bị nhảy quá nhiều.
 */

export default function AssemblyEndgame() {
    // State values
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([])

    // Derived values
    const wrongGuessCount =
        guessedLetters.filter(letter => !currentWord.includes(letter)).length
    const isGameWon =
        currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1
    const isGameOver = isGameWon || isGameLost

    // Static values
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )
    }

    const languageElements = languages.map((lang, index) => {
        const isLanguageLost = index < wrongGuessCount
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        const className = clsx("chip", isLanguageLost && "lost")
        return (
            <span
                className={className}
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })

    const letterElements = currentWord.split("").map((letter, index) => (
        <span key={index}>
            {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
        </span>
    ))

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (
            <button
                className={className}
                key={letter}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })
    
    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost
    })

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>

            <section className={gameStatusClass}>
                {isGameOver ? (
                    isGameWon ? (
                        <>
                            <h2>You win!</h2>
                            <p>Well done! 🎉</p>
                        </>
                    ) : (
                        <>
                            <h2>Game over!</h2>
                            <p>You lose! Better start learning Assembly 😭</p>
                        </>
                    )
                ) : (
                        null
                    )
                }
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

            {isGameOver && <button className="new-game">New Game</button>}
        </main>
    )
}
