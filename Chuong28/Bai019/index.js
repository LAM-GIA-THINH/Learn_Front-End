/**
 * Thử thách: GET tất cả các bình luận từ bài viết blog có ID là 2 và ghi vào console
 * 
 * BaseURL: https://apis.scrimba.com/jsonplaceholder/
 * Endpoint: ??? (Xem tài liệu JSON Placeholder: https://jsonplaceholder.typicode.com/guide/ và tìm phần "Listing nested resources")
 */


fetch("https://apis.scrimba.com/jsonplaceholder/posts/2/comments")
    .then(res => res.json())
    .then(data => console.log(data))