/**
 * Thử thách:
 * - Tạo một thành phần Contact trong một tệp khác
 * - Di chuyển một trong các thẻ bài viết (article) về thẻ liên hệ bên dưới vào tệp đó
 * - import và render 4 phiên bản của thẻ liên hệ đó
 *     - Hãy suy nghĩ trước: vấn đề khi làm theo cách này là gì?
 */

import Contact from "./Contact"

function App() {
    return (
        <div className="contacts">
            <Contact />
            <Contact />
            <Contact />
            <Contact />
        </div>
    )
}

export default App