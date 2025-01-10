import React from "react"
/**
 * Thách thức: Tạo state điều khiển việc pad này có trạng thái "on" 
 * hay "off". Sử dụng `props.on` để xác định trạng thái ban đầu.
 * 
 * Tạo một trình lắng nghe sự kiện để khi pad được nhấn,
 * nó sẽ chuyển đổi giữa trạng thái "on" và "off".
 * 
 * Mục tiêu: Nhấn vào mỗi pad sẽ thay đổi trạng thái "on" và "off".
 */
export default function Pad(props) {
    const [on, setOn] = React.useState(props.on)
    
    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <button 
            style={{backgroundColor: props.color}}
            className={on ? "on" : undefined}
            onClick={toggle}
        ></button>
    )
}