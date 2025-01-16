import React from "react"
import Toggle from "./Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"

export default function Star({ onChange }) {
/**
 * Thử thách:
 * 1. Nhận một prop gọi là onChange và truyền nó cho hàm onToggle của Toggle
 * 2. Thêm một prop onChange vào instance của component Star trong index.js 
 *    mà chỉ chạy một console.log() cho bây giờ.
 */
    return (
        <Toggle onToggle={onChange}>
            <Toggle.Button>
                <Toggle.On>
                    <BsStarFill className="star filled" />
                </Toggle.On>
                <Toggle.Off>
                    <BsStar className="star" />
                </Toggle.Off>
            </Toggle.Button>
        </Toggle>
    )
}