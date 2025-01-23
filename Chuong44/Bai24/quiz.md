Đêm Trao Giải bies
Đã đến lúc tổ chức Giải bies, một buổi lễ trao giải danh giá dành cho các host podcast. Chúng ta cần tập hợp danh sách các host podcast để bắt đầu trao giải. Viết một hàm nhận dữ liệu podcast và trả về một mảng phẳng các host podcast. Có nhiều cách để giải quyết vấn đề này, nhưng hãy thử sử dụng reduce(). Sau khi có mảng các host, viết một hàm thứ hai để ngẫu nhiên gán giải thưởng cho từng host từ mảng giải thưởng. Ví dụ kết quả: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...]

Để giải quyết bài toán này, bạn cần làm hai việc:

1. **Lấy danh sách các host** từ mảng podcast sử dụng `reduce()`.
2. **Gán giải thưởng ngẫu nhiên** cho mỗi host trong danh sách đó.

Dưới đây là cách thực hiện:

### 1. Hàm `getHosts(data)`:
Hàm này sẽ sử dụng `reduce()` để trích xuất tên của các host từ mảng podcast và trả về một mảng chứa tất cả tên của các host.

### 2. Hàm `assignAwards(data)`:
Hàm này sẽ nhận vào một danh sách các host và ngẫu nhiên gán giải thưởng cho từng host trong mảng `awards`.

```javascript
const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data) {
    return data.reduce((hosts, podcast) => {
        hosts.push(...podcast.hosts);  // Mở rộng mảng các host từ từng podcast
        return hosts;
    }, []);
}

function assignAwards(data) {
    const hosts = getHosts(data);
    return hosts.map(host => {
        // Chọn ngẫu nhiên một giải thưởng từ mảng awards
        const randomAward = awards[Math.floor(Math.random() * awards.length)];
        return `${randomAward} ${host}`;
    });
}

console.log(getHosts(podcasts));  // In ra danh sách các host
console.log(assignAwards(podcasts));  // In ra giải thưởng ngẫu nhiên cho các host
```

### Giải thích:

1. **`getHosts(data)`**:
   - `reduce()` được sử dụng để lặp qua tất cả các podcast trong mảng `data`.
   - Đối với mỗi podcast, bạn mở rộng mảng `hosts` bằng cách thêm các host từ `podcast.hosts`.
   - Cuối cùng, hàm trả về một mảng flat chứa tên của tất cả các host.

2. **`assignAwards(data)`**:
   - Hàm này lấy danh sách host từ `getHosts(data)`.
   - Dùng `map()` để tạo ra một mảng mới với mỗi host được gán ngẫu nhiên một giải thưởng từ mảng `awards`.
   - Để chọn ngẫu nhiên một giải thưởng, `Math.random()` và `Math.floor()` được sử dụng để lấy một chỉ số ngẫu nhiên trong mảng `awards`.

### Ví dụ đầu ra:

```
["Alex Booker", "Bob Smith", "Camilla Lambert", ...]
["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert", ...]
```

Giải thưởng sẽ được gán ngẫu nhiên cho mỗi host khi gọi hàm `assignAwards(podcasts)`.