//Tạo 1 file riêng để làm nhiệm vụ lấy dữ liệu
//Chỉnh lại Vans.jsx và server.js
export async function getVans() {
    const res = await fetch("/api/vans")
    const data = await res.json()
    return data.vans
}