import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "../../hooks/useToggle"

/**
 * Thử thách: Xóa tất cả các phần trong component Toggle
 * (nhưng đừng xóa các ngôi sao react-icons nhé!) và sử dụng
 * custom hook useToggle để điều kiện hiển thị các ngôi sao.
 * Đảm bảo thêm một onClick để chạy hàm `toggle`
 * mà bạn nhận được từ useToggle()
 **/

export default function Star({ onChange }) {
    const [on, toggle] = useToggle()
    return (
        <>
            {
                on ?
                    <BsStarFill onClick={toggle} className="star filled" /> :
                    <BsStar onClick={toggle} className="star" />
            }
        </>
    )
}