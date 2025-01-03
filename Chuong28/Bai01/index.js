/**
 * Thử thách:
 * 
 * Gửi một yêu cầu đến API JSON Placeholder bằng cách sử dụng `fetch`
 * URL: https://apis.scrimba.com/jsonplaceholder/posts
 * 
 * Tài liệu: https://jsonplaceholder.typicode.com/
 * 
 * Ghi dữ liệu phản hồi (response) vào console
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => console.log(data));
