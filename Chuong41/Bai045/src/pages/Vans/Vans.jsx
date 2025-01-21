import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    
    const typeFilter = searchParams.get("type")
    
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
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
    
/**
 * Thử thách: thêm các liên kết (links) để lọc xe tải theo loại. 
 * Sử dụng một chuỗi `to` cố định như chúng ta vừa thực hành. 
 * Các loại là "simple", "luxury", và "rugged".
 * 
 * Hiện tại, gán cho các Links một className là `van-type simple` 
 * (và thay thế thủ công "simple" bằng "luxury" và "rugged" cho 
 * các Links lọc theo những loại đó).
 * 
 * Bao gồm một Link để xóa các bộ lọc. ClassName của nó nên là 
 * `van-type clear-filters`.
 */


    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <Link 
                    to="?type=simple"
                    className="van-type simple"
                >Simple</Link>
                <Link 
                    to="?type=luxury"
                    className="van-type luxury"
                >Luxury</Link>
                <Link 
                    to="?type=rugged"
                    className="van-type rugged"
                >Rugged</Link>
                <Link 
                    to="."
                    className="van-type clear-filters"
                >Clear filter</Link>
            
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}