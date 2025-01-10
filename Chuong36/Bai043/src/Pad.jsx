export default function Pad(props) {
/**
 * Thách thức phần 3:
 * Các nút của chúng ta đã bị tắt mặc định! Cập nhật mã
 * để nếu nút ở trạng thái "on", nó sẽ có className là "on".
 */    
    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : undefined}
        ></button>
    )
}