import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Thử thách:
     * - Nếu không có tin nhắn chưa đọc, hiển thị "You're all caught up!"
     * - Nếu có đúng 1 tin nhắn chưa đọc, hiển thị "You have 1 unread message" (số ít)
     * - Nếu có > 1 tin nhắn chưa đọc, hiển thị "You have <n> unread messages" (số nhiều)
     */

    function determineText() {
        if (messages.length === 0) {
            return "You're all caught up!"
        } else if (messages.length === 1) {
            return "You have 1 unread message"
        } else {
            return `You have ${messages.length} unread messages`
        }
    }

    return (
        <div>
            <h1>{determineText()}</h1>
        </div>
    )
}
