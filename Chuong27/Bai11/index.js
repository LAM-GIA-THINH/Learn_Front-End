/**
Thử thách: 

- Làm cho giao diện trở nên thú vị hơn khi nhận được một ý tưởng 
hoạt động từ Bored API
    - Tài nguyên: Thuộc tính "classList" của phần tử DOM, uigradients.com, 
      Google Fonts, color.adobe.com
    - Một số ý tưởng:
      - Thay đổi tiêu đề từ "BoredBot" thành thứ gì đó thú vị hơn!
      - Đổi nền thành một thứ ít nhàm chán hơn.
      - Bonus: Thêm hiệu ứng hoạt hình cho một thứ gì đó trên màn hình 
        để làm trang web sống động hơn
*/

document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity;
      document.getElementById("title").textContent = "🦾 HappyBot🦿";
      document.body.classList.add("fun");
    });
});
