/* Thử thách: Bắt đầu từ đầu, xây dựng và render HTML cho dự án phần này. Kiểm tra Google slide để xem bạn đang cố gắng xây dựng gì.

Chúng ta sẽ thêm nhiều kiểu dáng (styling) vào sau.

Gợi ý:

Logo React là một tệp trong cây dự án, vì vậy bạn có thể truy cập nó bằng cách sử dụng src="react-logo.png" trong phần tử hình ảnh (image element)
Bạn cũng có thể đặt thuộc tính width của phần tử hình ảnh giống như trong HTML. Trong slide, tôi đã đặt nó là 40px */

import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <main>
        <img src="./src/react-logo.png" width="40px" alt="React logo" />
        <h1>Fun facts about React!</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
)
