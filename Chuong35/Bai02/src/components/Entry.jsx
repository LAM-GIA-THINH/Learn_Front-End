/**
 * Thử thách: Xây dựng thành phần Entry và render 1 phiên bản của nó
 * vào App
 * 
 * Hiện tại, chỉ cần mã hóa cứng dữ liệu, bạn có thể tìm thấy
 * trong japan.md để không phải gõ thủ công toàn bộ dữ liệu :)
 * 
 * Ghi chú:
 * – Chỉ render 1 phiên bản của thành phần Entry cho bây giờ
 * – Tôi đã thêm marker.png làm biểu tượng nhỏ cho bản đồ
 *   xuất hiện bên cạnh tên địa điểm
 * – Mục đích chính của thử thách này là để bạn thấy những giới hạn
 *   hiện tại của chúng ta, vì vậy đừng lo lắng về việc bạn phải mã hóa cứng
 *   tất cả dữ liệu này vào thành phần.
 */

export default function Entry() {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src="https://scrimba.com/links/travel-journal-japan-image-url" 
                    alt="mount fuji" 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="src/images/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">Japan</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                <h2 className="entry-title">Mount Fuji</h2>
                <p className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
            
        </article>
    )
}