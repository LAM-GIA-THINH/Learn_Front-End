/**
 * Thử thách: Sửa mã dưới đây để sử dụng giá trị của đối tượng `props`
 * thay thế cho các giá trị được mã hóa cứng bên dưới
 * 
 * Lưu ý: Sẽ có một lỗi nhỏ trong mã, vì vậy hãy cố gắng khắc phục nó!
 */
export default function Contact(props) {
    return (
        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src="src/images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="src/images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )
}
