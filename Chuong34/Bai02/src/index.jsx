/**

Thử thách: Thiết lập một ứng dụng React từ đầu một lần nữa.
Lần này, hãy thử hiển thị một danh sách không có thứ tự (unordered list)
với 2-3 mục trong danh sách nêu lý do tại sao bạn hào hứng học React. */

import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")).render(
    <ul>
        <li>Super popular JS library</li>
        <li>Will help me be even more employable</li>
        <li>React has a pretty cool logo</li>
    </ul>
)