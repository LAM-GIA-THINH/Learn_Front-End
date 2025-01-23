import React from "react"
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate"

const ToggleContext = React.createContext()
/**
 * Thử thách:
 * Sử dụng hook tùy chỉnh mới, tiện lợi của chúng ta
 * để thiết lập lại effect. Bạn sẽ biết nó hoạt động
 * khi log xuất hiện trong console sau khi nhấp vào hộp,
 * nhưng không chạy trong lần render đầu tiên.
 */
export default function Toggle({ children, onToggle = () => {}}) {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    useEffectOnUpdate(onToggle, [on])

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }