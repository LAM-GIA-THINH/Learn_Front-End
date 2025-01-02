/**
Thử thách: 

Khi nút được nhấn, gọi đến Bored API 
(URL: https://apis.scrimba.com/bored/api/activity)
và thay thế nội dung của thẻ h4 bằng hoạt động nhận được từ API

*/
document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity;
    });
});
