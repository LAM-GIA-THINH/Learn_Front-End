/**
 * Thử thách:
 * 
 * Lấy danh sách các công việc (todos) từ API JSON Placeholder:
 * 
 * BaseURL: https://apis.scrimba.com/jsonplaceholder/
 * Endpoint: /todos
 * 
 * Lần này, hãy đặt rõ ràng phương thức yêu cầu là "GET".
 * Ghi kết quả vào console.
 */

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {method: "GET"})
    .then(res => res.json())
    .then(data => console.log(data));
