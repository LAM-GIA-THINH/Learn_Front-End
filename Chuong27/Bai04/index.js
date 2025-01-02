/**
Thử thách:

1. Tìm kiếm trên Google với từ khóa "how to use fetch with json"
2. Bạn sẽ thấy kết quả hàng đầu từ MDN
3. TỰ TAY sao chép lệnh fetch, nhưng sử dụng URL bên dưới 👇
    https://dog.ceo/api/breeds/image/random
*/

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => console.log(data));
