🐞 Tẩy Sạch Vườn Hoa Emoji
Viết một hàm chuyển đổi dữ liệu để loại bỏ tất cả các mục không phải côn trùng và hoa. Sử dụng hàm này trong lệnh gọi API. Gợi ý: Hãy in dữ liệu ra console để xem các thuộc tính có thể giúp bạn làm điều này!

Mục tiêu: Chỉ giữ lại các phần tử là bugs và flowers từ dữ liệu ban đầu.

Để giải quyết bài toán này, bạn cần lọc dữ liệu để chỉ hiển thị các emoji thuộc về "bugs" và "flowers". Chúng ta sẽ sử dụng hàm `clearTheGarden()` để lọc dữ liệu này trước khi hiển thị ra trang web.

### Các bước thực hiện:
1. **Lọc dữ liệu**: Bạn cần kiểm tra xem mỗi emoji có thuộc về loại "bugs" hoặc "flowers" không. Điều này sẽ dựa vào các thuộc tính của emoji trong dữ liệu API (có thể là `category` hoặc một thuộc tính khác).
2. **Chỉ hiển thị bugs và flowers**: Sau khi lọc, bạn chỉ cần hiển thị các emoji này trong phần tử `emoji-flower-bed`.

### Cách triển khai:

```javascript
const api = 'https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature';
const flowerBed = document.querySelector('.emoji-flower-bed');

function clearTheGarden(arr) {
    // Lọc chỉ những emoji thuộc nhóm "bugs" và "flowers"
    return arr.filter(emoji => 
        emoji.category === "Bugs" || emoji.category === "Flowers"
    );
}

fetch(api) 
    .then(response => response.json())
    .then((data) => {
        // Lọc dữ liệu trước khi hiển thị
        const filteredData = clearTheGarden(data);
        
        // Hiển thị các emoji trong flower bed
        filteredData.forEach(emoji => {
            flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
        });
    })
    .catch(err => console.log(err));
```

### Giải thích:
1. **`clearTheGarden()`**: Hàm này nhận vào một mảng các emoji và chỉ trả về những emoji có thuộc tính `category` là "Bugs" hoặc "Flowers".
2. **API call**: Sau khi lấy dữ liệu từ API, chúng ta gọi `clearTheGarden()` để lọc dữ liệu trước khi hiển thị.
3. **Hiển thị emoji**: Sau khi lọc, mỗi emoji được thêm vào phần tử `emoji-flower-bed` bằng cách sử dụng `innerHTML`.

### Lưu ý:
- Bạn cần kiểm tra cấu trúc dữ liệu của API để chắc chắn rằng các emoji có thuộc tính `category` để xác định loại emoji.