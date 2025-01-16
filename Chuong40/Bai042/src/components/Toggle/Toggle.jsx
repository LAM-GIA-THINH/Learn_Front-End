import React from "react"

const ToggleContext = React.createContext()
/**
 * Thử thách: Chúng ta chỉ muốn chạy onToggle() SAU lần render đầu tiên
 * của component. Chúng ta có thể sử dụng refs để theo dõi xem đây có phải 
 * là lần đầu tiên component này render hay không.
 * 
 * 1. Tạo một ref gọi là `firstRender` với giá trị mặc định là `true`
 *    (Vì khi chúng ta tạo ref lần đầu tiên, đó là lần đầu tiên component được render)
 * 2. Trong useEffect, kiểm tra xem giá trị của ref có phải là `true` không.
 *    Nếu đúng, đặt nó thành `false`. Nếu không phải... bạn có thể đoán được không??
 * Gợi ý: đừng quên rằng giá trị boolean của bạn sẽ được lưu trữ dưới `firstRender.current`, 
 * chứ không phải chỉ là `firstRender`!
 */
export default function Toggle({ children, onToggle }) {
    const [on, setOn] = React.useState(false)
    const firstRender = React.useRef(true)
    

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            onToggle()
        }
    }, [on])

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }