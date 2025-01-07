import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

// Declarative (Cách tiếp cận khai báo):

// Tập trung vào cái gì cần đạt được.
// Chỉ mô tả kết quả mong muốn, hệ thống tự xử lý chi tiết.
// Ví dụ: Sử dụng React để khai báo giao diện với JSX.
root.render(
    <h1 className="header">Hello, React!</h1>
)


/* 
Thử thách - tái tạo dòng code trên bằng JavaScript thuần túy bằng cách tạo và
thêm một phần tử h1 vào div#root (không sử dụng innerHTML).

- Tạo một phần tử h1 mới (sử dụng createElement)
- Gán nội dung văn bản cho nó (textContent)
- Gán cho nó một tên lớp là "header"
- Thêm nó như một phần tử con (sử dụng `appendChild`) vào div#root

Không sử dụng innerHTML để thực hiện bất kỳ điều gì ở trên.

Imperative (Cách tiếp cận chỉ dẫn):

Tập trung vào làm thế nào để đạt được mục tiêu.
Yêu cầu viết từng bước chi tiết.
Ví dụ: Tạo và thêm thẻ DOM bằng JavaScript thuần.
*/

const h1 = document.createElement("h1")
h1.textContent = "This is imperative coding"
h1.className = "header"
document.getElementById("root").appendChild(h1)