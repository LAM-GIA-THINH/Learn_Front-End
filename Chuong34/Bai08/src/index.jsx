/**

Thử thách: tạo một ứng dụng React mới từ đầu!
Gợi ý:
Cần nhập phương thức để tạo một root mới
từ packet "react-dom/client".
Sử dụng root đó để render một số JSX. Tạm thời, chỉ cần render
một phần tử h1 với nội dung bất kỳ bạn muốn. */

import { createElement } from "react"
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
root.render(
    <main>
        <img src="./src/react-logo.png" />
        <h1>This is another element</h1>
    </main>
)
