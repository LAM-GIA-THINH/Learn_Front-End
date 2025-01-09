import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState([1])
    /**
     * Thử thách 1:
     * Chỉ hiển thị <h1> dưới đây nếu có tin nhắn chưa đọc
     */

    /**
     * Thử thách 2:
     * Nếu không có tin nhắn chưa đọc, hiển thị một đoạn văn nói "You have no unread messages". 
     * (Vì vậy, logic sẽ ngược lại với
     * những gì chúng ta có cho h1)
     */    
    return (
      <div>
      {
          unreadMessages.length > 0 && 
          <h1>You have {unreadMessages.length} unread messages!</h1>
      }
      {
          unreadMessages.length === 0 && 
          <p>You have no unread messages</p>
      }
      
      
  </div>
    )
}
