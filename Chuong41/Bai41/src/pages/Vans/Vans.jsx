import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
/**
 * Thử thách: truy cập các tham số tìm kiếm (search params) trong component này
 * 1. Sử dụng hook từ react-router-dom, tạo một biến
 *    có tên là `searchParams`
 * 2. Lưu giá trị của tham số `type` (từ
 *    đối tượng `searchParams`) vào một biến có tên là `typeFilter`
 * 3. Ghi log giá trị của `typeFilter` ra console
 */

    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)
    
    
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
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