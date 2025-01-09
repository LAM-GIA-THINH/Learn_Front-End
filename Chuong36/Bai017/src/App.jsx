import React from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    // Thử thách: Sử dụng biểu thức điều kiện ba ngôi để xác định biến ảnh ngôi sao nào
    // nên được sử dụng dựa trên thuộc tính `contact.isFavorite`
    let starIcon = contact.isFavorite ? starFilled : starEmpty

    // Thử thách: Cập nhật `toggleFavorite` để thay đổi `contact.isFavorite` khi nhấn nút
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        // Thử thách: `aria-pressed` phản ánh giá trị `contact.isFavorite`
                        aria-pressed={contact.isFavorite}
                        // Thử thách: `aria-label` chuyển thành "Remove from favorites" nếu `contact.isFavorite` là `true` 
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"} 
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            // Thử thách: alt của img nói "filled star icon" khi ngôi sao đã được điền
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"} 
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
