Câu hỏi:

/* Tìm Podcast miễn phí  

Chúng ta có một danh sách các podcast và cần có khả năng lọc ra các podcast miễn phí.  

Viết một hàm nhận vào dữ liệu podcast và trả về một mảng mới chỉ chứa các podcast miễn phí.  

Ngoài ra, mảng mới của bạn chỉ nên chứa các đối tượng bao gồm tiêu đề podcast, đánh giá và thông tin liệu nó có phải là podcast trả phí hay không.  

Kết quả mong đợi:  
[  
    {title: "Podcast", rating: 10, paid: false},  
    {title: "Something about Witches", rating: 8, paid: false},  
    {title: "Coding Corner", rating: 9, paid: false}  
]  
*/

Đáp án:

```javascript
function getFreePodcasts(data) {
    // Lọc các podcast miễn phí và chỉ lấy các thông tin cần thiết
    return data.filter(podcast => !podcast.paid)
               .map(podcast => ({
                   title: podcast.title,
                   rating: podcast.rating,
                   paid: podcast.paid
               }));
}

console.log(getFreePodcasts(podcasts));  // In ra các podcast miễn phí
```

Giải thích:
- Sử dụng phương thức `filter()` để lọc ra các podcast không phải trả phí (tức là `paid: false`).
- Sau đó, sử dụng `map()` để trả về các đối tượng chỉ chứa thông tin tiêu đề, đánh giá và thông tin trả phí của podcast.
