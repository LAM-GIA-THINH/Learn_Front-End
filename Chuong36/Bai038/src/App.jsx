import React from "react"
import avatar from "./images/user.png"
import Star from "./Star"
/**
 * Thách thức: Chuyển hình ảnh ngôi sao vào một component riêng (Star)
 * - Component này sẽ nhận một prop gọi là `isFilled`, được sử dụng
 *   để xác định biểu tượng nào sẽ hiển thị. (Bạn cần import 
 *   2 biểu tượng ngôi sao vào component mới này trước).
 * - Import và render component đó, truyền giá trị của 
 *   `isFavorite` vào prop mới `isFilled`.
 * - Chưa cần quan tâm đến khả năng thay đổi giá trị này. 
 *   Thay vào đó, bạn có thể kiểm tra xem nó hoạt động không bằng cách 
 *   thay đổi thủ công giá trị `isFavorite` trong state ở trên.
 */
export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

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
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
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
