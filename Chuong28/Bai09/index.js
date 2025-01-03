fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })

/**
 Thử thách:
 
 * Lắng nghe sự kiện "submit" trên biểu mẫu (sự kiện này sẽ xảy ra khi nút được nhấn)
    * (Đừng quên gọi `preventDefault` trên biểu mẫu để nó không làm mới trang của bạn. Tìm kiếm "form preventDefault" nếu bạn không chắc chắn tôi đang nói về gì)
 * Kết hợp giá trị tiêu đề và nội dung thành một đối tượng (với thuộc tính "title" và "body")
 * In đối tượng ra console
*/


document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }
    console.log(data)
})