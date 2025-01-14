import React from "react"

/**
 * Mục tiêu: Xây dựng các phần chính của ứng dụng
 * 
 * Thử thách: Xây dựng một phần trạng thái bên dưới tiêu đề.
 * Hiện tại, bạn có thể chỉ cần mã hóa cứng các kiểu
 * cho một trò chơi chiến thắng, và sau đó chúng ta sẽ
 * làm cho nó linh hoạt hơn.
 */

export default function AssemblyEndgame() {
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
        </main>
    )
}
