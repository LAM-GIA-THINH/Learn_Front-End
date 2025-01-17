/**
 * Bắt đầu tạo custom hook useToggle!
 * 
 * 1. Tạo một hàm gọi là useToggle(). Tạm thời bỏ qua
 *    các tham số. (Chúng ta sẽ quay lại sau)
 * 2. Đưa useState và hàm toggle từ component Toggle
 *    vào trong hook này.
 * 3. Sẽ được bổ sung sau (TBA - To Be Announced)
 */

export default function useToggle() {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
}