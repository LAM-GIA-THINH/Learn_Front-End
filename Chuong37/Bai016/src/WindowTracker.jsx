import React from "react"

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function watchWindowWidth () {
            console.log("Resized")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWindowWidth)
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWindowWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
// Hàm dọn dẹp: Hàm trả về từ useEffect được gọi khi component unmount hoặc trước khi effect chạy lại. 
// Điều này giúp xóa event listener resize, ngăn rò rỉ bộ nhớ.
// Quản lý tài nguyên tốt hơn: Đảm bảo mỗi listener được đăng ký có thể được gỡ bỏ đúng cách khi không còn cần thiết.