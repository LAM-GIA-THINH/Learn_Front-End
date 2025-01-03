/**
 Thách thức:

 Hãy làm cho nó đẹp hơn!

 * Thêm một thanh điều hướng cố định ngắn (khoảng 30px chiều cao) ở phía trên với dòng chữ "BlogSpace". Nhớ thêm khoảng đệm (padding) trên nội dung để nội dung không bị che bởi thanh điều hướng.
 * Thêm một phông chữ từ Google Fonts.
 * Bất kỳ kiểu dáng (styling) nào khác bạn muốn để làm cho nó trông đẹp hơn!
 
 */
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