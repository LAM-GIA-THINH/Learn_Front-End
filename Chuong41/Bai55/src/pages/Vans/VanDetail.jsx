import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()
    console.log(location)
    
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

/**
 * Thử thách: chỉnh sửa thuộc tính `to` của Link dưới đây để
 * gửi người dùng quay lại trang trước với các searchParams
 * đã bao gồm, nếu có. (Nhớ rằng có thể không có gì trong state
 * nếu trước đó không có bộ lọc nào được áp dụng khi đến trang
 * chi tiết xe tải này, vì vậy hãy chắc chắn "viết mã một cách an toàn"
 * để xử lý trường hợp đó.)
 */

    const search = location.state?.search || ""
    
    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}