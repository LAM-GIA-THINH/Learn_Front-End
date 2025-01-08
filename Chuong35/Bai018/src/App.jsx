import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"
/**
 * Thử thách:
 * - import mảng dữ liệu từ tệp data.js
 * - sử dụng `.map()` trên mảng để tạo một thành phần <Entry /> 
 *   cho mỗi phần tử trong mảng dữ liệu.
 * - hiển thị mảng các thành phần <Entry /> thay thế cho 
 *   phiên bản <Entry /> được mã hóa cứng hiện tại.
 */
export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                img={entry.img}
                title={entry.title}
                country={entry.country}
                googleMapsLink={entry.googleMapsLink}
                dates={entry.dates}
                text={entry.text}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}