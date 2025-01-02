/**
Thử thách:

1. Lại lấy một ảnh ngẫu nhiên từ Dog API 
(https://dog.ceo/api/breeds/image/random)

2. Truy cập DOM và chèn URL mà bạn nhận được từ 
API vào thuộc tính `src` của một thẻ hình ảnh (có thể 
dễ nhất nếu bạn tạo hoàn toàn thẻ hình ảnh trong JS 
và thêm nó vào innerHTML của một phần tử khác trên DOM)
*/

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("image-container").innerHTML = `
            <img src="${data.message}" />
        `;
    });
