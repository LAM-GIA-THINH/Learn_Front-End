import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
/**

Thử thách (phần 1):
Tạo một component "Page" tùy chỉnh
Component này nên trả về một danh sách có thứ tự với các lý do tại sao bạn
hứng thú khi học React :)
Render component Page. */
function Page() {
    return (
        <ol>
            <li>React is a popular library, so I will be able to
            fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer
            if I know React</li>
        </ol>
    )
}

root.render(
    <Page />
)
