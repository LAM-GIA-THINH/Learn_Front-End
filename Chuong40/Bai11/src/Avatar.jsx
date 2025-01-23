import React from "react"
import { IoPersonSharp } from "react-icons/io5"

/**npm install react-icons
 * Thử thách: Tạo một component Avatar linh hoạt!
 * 
 * Kiểm tra các slide để biết ghi chú về cách sử dụng 
 * component này.
 * 
 * Mỗi trong ba avatar khác nhau sẽ có một div bao bọc với các
 * class sau:
 * 
 * Với hình ảnh: `avatar`
 * Với chữ cái: `avatar avatar-letters`
 * Ẩn danh: `avatar avatar-icon`
 * 
 * Ví dụ: <Avatar>BZ</Avatar> sẽ render thành
 * <div className="avatar avatar-letters">...</div>
 * 
 * Kiểm tra file hints.md nếu bạn gặp khó khăn.
 * 
 * THÊM:
 * Ngẫu nhiên hóa màu nền của các avatar không có hình ảnh.
 * Kiểm tra styles.css để tìm các lớp màu đã được viết sẵn
 * để thêm vào div bao bọc.
 */

export default function Avatar({src, alt, children}) {
    if (src) {
        return (
            <div className="avatar">
                <img src={src} alt={alt}/>
            </div>
        )
    }
    if (children) {
        return (
            <div className="avatar avatar-letters">
                {children}
            </div>
        )
    }
    else {
        return (
            <div className="avatar avatar-icon">
                <IoPersonSharp />
            </div>
        )
    }
}