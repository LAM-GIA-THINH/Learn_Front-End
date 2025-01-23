Cuộc Thi Độ Phổ Biến
Iggy (Influencer) và Toby (Tiktoker) rất muốn biết ai có nhiều người theo dõi hơn trên mạng xã hội. Các TikTok của Toby có trung bình 400 lượt thích. Trung bình, các bài đăng Instagram của Iggy nhận được bao nhiêu lượt thích? Trong tập tin data.js, bạn sẽ tìm thấy danh sách các bài đăng gần đây của Iggy. Sử dụng reduce() để viết một hàm trả về số lượng thích trung bình. Để tìm trung bình, hãy cộng tổng số lượt thích, sau đó chia cho tổng số bài đăng.

Để tính số lượt thích trung bình từ danh sách các bài đăng của Iggy, bạn có thể sử dụng hàm `reduce()` để tính tổng số lượt thích và sau đó chia cho số lượng bài đăng để tìm giá trị trung bình. 

Dưới đây là cách thực hiện:

```javascript
function calcAverageLikes(data) {
    // Tính tổng số lượt thích bằng reduce
    const totalLikes = data.reduce((sum, post) => sum + post.likes, 0);

    // Tính số lượng bài đăng
    const totalPosts = data.length;

    // Tính và trả về trung bình
    return totalLikes / totalPosts;
}

console.log(calcAverageLikes(postData));
```

**Giải thích:**
1. **reduce()**: Hàm `reduce()` sẽ giúp bạn cộng dồn số lượt thích từ tất cả các bài đăng. Mỗi phần tử `post` trong mảng `data` chứa thông tin về mỗi bài đăng, và `post.likes` chính là số lượt thích của bài đăng đó.
2. **totalLikes**: Biến này sẽ lưu tổng số lượt thích từ tất cả các bài đăng.
3. **totalPosts**: Biến này lưu số lượng bài đăng trong danh sách `data`.
4. Cuối cùng, bạn chia tổng số lượt thích cho tổng số bài đăng để tính số lượt thích trung bình.

**Kết quả mong đợi**:
Hàm sẽ trả về số lượt thích trung bình cho các bài đăng của Iggy.