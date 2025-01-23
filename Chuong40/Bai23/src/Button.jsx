import React from "react"
import {ThemeContext} from "./App"
/**
 * Thử thách phần 2:
 * Làm tương tự với component Button :) Chỉ cần tập trung vào 
 * việc thay đổi className, chưa cần quan tâm đến việc làm cho 
 * nút bấm hoạt động.
 */
export default function Button() {
    const value = React.useContext(ThemeContext)
    
    return (
        <button className={`${value}-theme`}>
            Switch Theme
        </button>
    )
}