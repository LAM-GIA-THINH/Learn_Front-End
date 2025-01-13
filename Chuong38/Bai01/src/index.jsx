/**
 * Thử thách: Bắt đầu một ứng dụng React hoàn toàn mới!
 * - Tạo một component App riêng biệt
 * - Import và render component App tại đây
 * - Trong component App, render một phần tử <main>
 * - Style mọi thứ sao cho giống với giao diện được mô tả trong slide
 */

import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(<App />)