/**
 * Thử thách:
 * 
 * Lấy danh sách các bài đăng blog từ API JSON Placeholder.
 * 
 * BaseURL: https://apis.scrimba.com/jsonplaceholder/
 * Endpoint: /posts
 * 
 * Vì có quá nhiều bài đăng, hãy giới hạn mảng chỉ còn 5 mục.
 * Bạn có thể sử dụng phương thức `.slice()` của mảng để lấy 5 đối tượng
 * đầu tiên từ mảng dữ liệu trả về từ API.
 * 
 * Ghi 5 mục này vào console.
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5);
        console.log(postsArr);
    });
