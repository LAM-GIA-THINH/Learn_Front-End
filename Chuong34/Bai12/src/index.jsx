import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
/** Thử thách:

Phần 2:

Thêm một phần tử <header> với một phần tử <img /> chứa hình ảnh logo React bên trong (src="react-logo.png") và đảm bảo thiết lập chiều rộng cho hình ảnh sao cho nó không chiếm toàn bộ màn hình. Như thường lệ, bạn cũng nên thêm văn bản alt cho hình ảnh.
Thêm một phần tử <h1> với một số văn bản mô tả trang. (Ví dụ: "Lý do tôi hào hứng học React"). Đặt nó phía trên danh sách có thứ tự, sau đó bọc phần tử <h1> và <ol> trong một phần tử <main> để giữ cấu trúc ngữ nghĩa của chúng mạch lạc.
Thêm một phần tử <footer> sau danh sách có nội dung: "© 20xx <họ của bạn ở đây> development. Mọi quyền được bảo lưu." */
function Page() {
    return (
        <div>
            <header>
                <img src="./src/react-logo.png" width="40px" alt="React logo" />
            </header>
            <main>
                <h1>Reason I am excited to learn React</h1>
                <ol>
                    <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                    <li>I am more likely to get a job as a front end developer if I know React</li>
                </ol>
            </main>
            <footer>
                <small>© 2024 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
}

root.render(
    <Page />
)
