/**
 * Thử thách:
 * 
 * Với 5 đối tượng bài đăng blog, hiển thị các thuộc tính `title`
 * và `body` của 5 bài đăng đầu tiên trên trang trình duyệt.
 * 
 * Gợi ý: 
 * - Tạo một `div` trong tệp HTML để lưu trữ các mục này.
 * - Lặp qua các mục, tạo một chuỗi các phần tử HTML mà bạn có thể
 *   đặt vào `div` bằng `innerHTML`.
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5);
        let html = "";
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `;
        }
        document.getElementById("blog-list").innerHTML = html;
    });
