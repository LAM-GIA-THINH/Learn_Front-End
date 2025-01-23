🌴 Giải Cứu Cuối Tuần 🌴
Viết một hàm sử dụng các phương thức mảng để tạo mô tả cho từng podcast. Mô tả nên bao gồm tiêu đề podcast, thời lượng, thể loại, và host. Mỗi mô tả sẽ có định dạng: "{Tiêu đề} là một podcast {thể loại} dài {thời lượng} phút do {host} dẫn dắt." Thêm mô tả này như một thuộc tính mới vào mỗi đối tượng podcast và trả về một mảng podcast mới. Nếu podcast có nhiều host, có thể chỉ hiển thị host đầu tiên. Mục tiêu mở rộng: Hiển thị tối đa ba host, cách nhau bằng dấu phẩy.

Để giải quyết bài toán này, bạn cần tạo một mô tả cho mỗi podcast trong mảng dữ liệu sao cho mô tả này bao gồm:

- Tiêu đề của podcast.
- Thời gian dài của podcast.
- Tên của người dẫn chương trình (host). Nếu podcast có nhiều host, bạn sẽ hiển thị tên của ba host đầu tiên.

Sau khi tạo mô tả, bạn cần trả về một mảng các podcast đã được cập nhật với thuộc tính `description`.

Dưới đây là cách thực hiện:

### Cách giải quyết:

1. **Tạo mô tả cho từng podcast**: Dùng `map()` để lặp qua các podcast, tạo ra mô tả dựa trên tiêu đề, thời gian và tên các host.
2. **Thêm mô tả vào mỗi podcast**: Sử dụng `map()` để trả về một mảng mới, mỗi phần tử là một podcast đã được bổ sung thêm thuộc tính `description`.

### Cách triển khai:

```javascript
function createDescriptionsFor(data) {
    return data.map(podcast => {
        // Tạo mô tả cơ bản
        let description = `${podcast.title} is a ${podcast.duration} minute ${podcast.category} podcast hosted by ${podcast.hosts[0]}`;
        
        // Nếu có nhiều host, hiển thị ba host đầu tiên
        if (podcast.hosts.length > 1) {
            const firstThreeHosts = podcast.hosts.slice(0, 3).join(", ");
            description = `${podcast.title} is a ${podcast.duration} minute ${podcast.category} podcast hosted by ${firstThreeHosts}`;
        }

        // Trả về podcast đã được bổ sung thuộc tính description
        return { ...podcast, description };
    });
}

console.log(createDescriptionsFor(podcasts));
```

### Giải thích:
- **`map()`**: Dùng `map()` để tạo một mảng mới với mỗi phần tử là một podcast đã được cập nhật với `description`.
- **Mô tả cơ bản**: Tạo mô tả cho podcast với tiêu đề, thời gian, và danh sách host.
- **Lọc nhiều host**: Nếu podcast có nhiều hơn một host, bạn sẽ lấy ba host đầu tiên và nối chúng lại thành chuỗi.
- **Kết quả**: Trả về một mảng các podcast với thuộc tính `description` đã được thêm vào.

### Ví dụ đầu ra:

Giả sử podcast có cấu trúc như sau:

```javascript
[
    {id: 1, title: "Podcast", duration: 50, category: "education", hosts: ["Alex Booker"]},
    {id: 2, title: "Coding Corner", duration: 55, category: "education", hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"]},
]
```

Sau khi chạy hàm `createDescriptionsFor(podcasts)`, bạn sẽ có kết quả như sau:

```javascript
[
    {
        id: 1,
        title: "Podcast",
        duration: 50,
        category: "education",
        hosts: ["Alex Booker"],
        description: "Podcast is a 50 minute education podcast hosted by Alex Booker."
    },
    {
        id: 2,
        title: "Coding Corner",
        duration: 55,
        category: "education",
        hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"],
        description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
    }
]
```

Mỗi podcast sẽ có một mô tả đi kèm.