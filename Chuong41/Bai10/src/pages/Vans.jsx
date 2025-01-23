import React from "react"
/**
 * Thử thách: Fetch và duyệt qua dữ liệu để hiển thị nó trên
 * trang Vans. Nếu muốn thử thách thêm, hãy dành thời gian
 * để tạo kiểu (styling) sao cho giống với thiết kế.
 * 
 * Gợi ý:
 * 1. Sử dụng `fetch(/api/vans)` để bắt đầu yêu cầu lấy dữ liệu
 *    từ server giả Mirage JS của chúng ta.
 * 2. Bạn sẽ sử dụng hook React nào để fetch dữ liệu ngay khi
 *    trang Vans tải xong và chỉ thực hiện việc fetch một lần duy nhất?
 * 3. Có thể bạn sẽ gặp lỗi nói rằng "console.groupCollapsed is not
 *    a function". Bạn có thể bỏ qua lỗi này ở thời điểm hiện tại.
 */
/**
 * {
    * id: "1", 
    * name: "Modest Explorer", 
    * price: 60, 
    * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", 
    * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", 
    * type: "simple"
 * }
 */


export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}