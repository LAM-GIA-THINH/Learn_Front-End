import React from "react"
import { useParams, Link } from "react-router-dom"

export default function HostVanDetail() {
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
/**
 * Thử thách nhỏ: Cố gắng làm sao để liên kết "Back to all vans"
 * đưa người dùng QUAY LẠI một route.
 * 
 * GỢI Ý LỚN: chúng ta vừa nói về cách `cd .` và `cd ..`
 * hoạt động trong terminal, và đã đề cập đến cách `.` đại diện
 * cho route hiện tại.
 * 
 * CẢNH BÁO LỚN: nó sẽ không làm những gì bạn nghĩ nó sẽ làm,
 * nhưng chúng ta sẽ học lý do tại sao và thấy cách sửa dễ dàng 🤭
 */

        
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
