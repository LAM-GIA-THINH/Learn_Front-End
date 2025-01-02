/**
Thử thách: 

1. Lấy một hoạt động ngẫu nhiên từ Bored API
URL: https://apis.scrimba.com/bored/api/activity

2. Hiển thị nội dung của hoạt động đó trên trình duyệt
*/

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("activity-name").textContent = data.activity;
    });
