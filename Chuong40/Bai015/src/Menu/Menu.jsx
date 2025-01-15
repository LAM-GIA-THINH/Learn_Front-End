import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

export default function Menu({ children }) {
/**
 * Ghi chú: giữ nguyên div className="menu" ở đây và render
 * các children bên trong div đó. Lưu ý rằng component này sẽ trở nên
 * đơn giản hơn đáng kể khi làm như vậy 💡
 * 
 * Ngoài ra, lưu ý rằng state của chúng ta sẽ bị hỏng sau khi
 * thực hiện những thay đổi này - không sao cả! Chúng ta sẽ sửa nó sớm. Trong thời gian này,
 * hãy giữ nguyên lệnh gọi useState() và các định nghĩa toggle(). 
 * Phiên bản mới của bạn sẽ không sử dụng chúng, nhưng chúng ta sẽ quay lại
 * sau.
 */
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div className="menu">
            {children}
        </div>
    )
}
