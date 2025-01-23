Chào mừng Hãng Hàng không
Gói giải trí trên chuyến bay Scrimba của chúng tôi bao gồm nhiều loại podcast. Chúng tôi cần thêm một tính năng đề xuất podcast cho hành khách dựa trên độ dài chuyến bay. Hàm sắp xếp của bạn sẽ nhận hai đối số: dữ liệu podcast và độ dài chuyến bay. Nếu chuyến bay 60 phút hoặc ngắn hơn, sắp xếp danh sách podcast từ ngắn đến dài. Nếu là chuyến bay dài hơn, sắp xếp từ dài đến ngắn. Hàm của bạn không nên trả về gì cả. Thay vào đó, in ra danh sách được đánh số gồm tiêu đề và thời lượng của từng podcast, như sau: 1. Crime Fan, 150 phút 2. Mythical Creatures, 99 phút 3. Crime Crime Crime, 70 phút 4. Coding Corner, 55 phút 5. Scrimba Podcast, 50 phút 6. Something about Witches, 35 phút

Để giải quyết bài toán, bạn cần phải viết một hàm `sortByDuration` có thể sắp xếp danh sách các podcast dựa vào độ dài chuyến bay (flight length). Nếu chuyến bay dài 60 phút hoặc ít hơn, bạn sẽ sắp xếp danh sách các podcast từ ngắn nhất đến dài nhất, còn nếu chuyến bay dài hơn 60 phút, bạn sẽ sắp xếp từ dài nhất đến ngắn nhất.

Dưới đây là cách thực hiện:

```javascript
function sortByDuration(data, flightLength) {
    // Kiểm tra nếu chuyến bay ngắn hay dài và sắp xếp danh sách tương ứng
    const sortedPodcasts = data.sort((a, b) => {
        if (flightLength <= 60) {
            // Sắp xếp từ ngắn nhất đến dài nhất
            return a.duration - b.duration;
        } else {
            // Sắp xếp từ dài nhất đến ngắn nhất
            return b.duration - a.duration;
        }
    });

    // In ra danh sách theo định dạng yêu cầu
    sortedPodcasts.forEach((podcast, index) => {
        console.log(`${index + 1}. ${podcast.title}, ${podcast.duration} minutes`);
    });
}

sortByDuration(podcasts, 60);
```

**Giải thích:**
1. **sort()**: Hàm `sort()` được sử dụng để sắp xếp các podcast dựa trên độ dài của chúng. Cách so sánh trong hàm `sort()` sẽ khác nhau tùy vào độ dài chuyến bay. Nếu chuyến bay dài 60 phút hoặc ít hơn, bạn sẽ sắp xếp từ podcast ngắn nhất đến dài nhất. Ngược lại, nếu chuyến bay dài hơn 60 phút, bạn sẽ sắp xếp từ dài nhất đến ngắn nhất.
   
2. **forEach()**: Sau khi sắp xếp xong, bạn sẽ lặp qua danh sách các podcast đã được sắp xếp và in ra thông tin mỗi podcast dưới dạng yêu cầu (ví dụ: "1. Crime Fan, 150 minutes").

**Kết quả mong đợi**: 

Nếu chuyến bay là 60 phút hoặc ít hơn, danh sách sẽ được sắp xếp từ ngắn nhất đến dài nhất, và ngược lại nếu chuyến bay dài hơn 60 phút.

