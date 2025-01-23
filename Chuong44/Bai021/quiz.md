Câu hỏi:

/*  
Là một lập trình viên phần mềm tại ScrimFlix, bạn đang làm việc trên tính năng cho phép người dùng duyệt các chương trình truyền hình theo thẻ.  
Bước đầu tiên là thu thập tất cả các thẻ từ dữ liệu của chúng tôi vào một mảng mới. Sau đó, bạn cần lọc bỏ các thẻ trùng lặp.  

Viết một hàm nhận dữ liệu truyền thông và trả về một mảng phẳng của các thẻ duy nhất.

Kết quả mong đợi:  
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]
*/

Đáp án:

```javascript
function getUniqueTags(data) {
    // Sử dụng reduce() để thu thập tất cả các thẻ và loại bỏ trùng lặp
    const allTags = data.reduce((tags, media) => {
        // Kết hợp thẻ của mỗi chương trình vào mảng tags
        return [...tags, ...media.tags];
    }, []);
    
    // Sử dụng Set để loại bỏ thẻ trùng lặp và trả về mảng duy nhất
    return [...new Set(allTags)];
}

console.log(getUniqueTags(mediaData));
```

Giải thích:
- Hàm `getUniqueTags` sử dụng `reduce()` để lặp qua tất cả các chương trình truyền hình trong `mediaData`, lấy ra các thẻ từ mỗi chương trình và kết hợp chúng vào một mảng `allTags`.
- Sau khi thu thập được tất cả các thẻ, sử dụng `Set` để loại bỏ các thẻ trùng lặp. Vì `Set` chỉ lưu trữ các giá trị duy nhất, chúng ta có thể chuyển đổi lại nó thành một mảng sử dụng `[...new Set(allTags)]`.
- Kết quả là mảng các thẻ duy nhất.