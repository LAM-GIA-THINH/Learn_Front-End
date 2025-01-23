/**
Thử thách:

- Gửi một yêu cầu để thêm một mục todo mới
    - BaseURL: https://apis.scrimba.com/jsonplaceholder/
    - Endpoint: /todos
- Đối tượng body nên chứa một thuộc tính "title" (dạng chuỗi) 
  và một thuộc tính "completed" (dạng boolean)
- Đừng thêm các khối .then() ngay lúc này - chúng ta còn một việc 
  nữa cần làm trước khi nó hoạt động đúng

Phần 2 - thêm các khối .then để kiểm tra dữ liệu trả về
*/


fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    method: "POST",
    body: JSON.stringify({
        title: "Buy Milk",
        completed: false
    })
})
    .then(res => res.json())
    .then(data => console.log(data))