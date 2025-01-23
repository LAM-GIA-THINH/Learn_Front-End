import React from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail() {

/**
 * Thử thách (không phải tùy chọn!): xây dựng phần UI chung của trang
 * Chi tiết Host Van. Đây là
 * 
 * Phần tùy chọn: cũng định dạng nó sao cho giống với thiết kế.
 * 
 * Hiện tại, lấy dữ liệu từ một yêu cầu đến `/api/host/vans/:id`
 * và hiển thị hình ảnh, tên, giá, loại của chiếc van.
 */
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])
    
    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <img src={currentVan.imageUrl} width={150} />
            <h2>{currentVan.name}</h2>
            <p>{currentVan.price}</p>
            <p>{currentVan.type}</p>
        </div>
    )
}
